const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/bookingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Model
const Booking = require("./models/Booking");

// ✅ EMAIL SETUP (GMAIL APP PASSWORD)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dishashelar196@gmail.com",
    pass: "lnpuemzwovqswspu", // app password
  },
});

// ✅ TEST EMAIL ROUTE
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: "dishashelar196@gmail.com",
      to: "dishashelar196@gmail.com",
      subject: "Test Email ✅",
      text: "Email working properly!",
    });

    res.send("✅ Email sent successfully");
  } catch (error) {
    console.log(error);
    res.send("❌ Email failed");
  }
});

// ✅ SAVE BOOKING + SEND EMAIL
app.post("/api/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // 👇 dynamic tour/vehicle/service
    const selectedOption =
      req.body.tourType || req.body.vehicleType || "General Service";

    const mailOptions = {
      from: "dishashelar196@gmail.com",
      to: req.body.email,
      subject: "Booking Confirmation ✅",
      html: `
        <h2>Booking Confirmed 🎉</h2>
        <p>Hi ${req.body.name},</p>

        <p>Your booking is successfully confirmed.</p>

        <p><b>Service:</b> ${req.body.serviceType}</p>
        <p><b>Selected:</b> ${selectedOption}</p>
        <p><b>Date:</b> ${new Date(req.body.dateTime).toLocaleString()}</p>

        <br/>
        <p>Thank you for choosing Maldar Tours & Travels ❤️</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Booking saved & email sent" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving booking" });
  }
});

// ✅ GET ALL BOOKINGS
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// ✅ DELETE BOOKING
app.delete("/api/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});