const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceType: String,
  vehicleType: String,
  tourType: String,
  name: String,
  email: String,
  mobile: String,
  dateTime: String,
});

module.exports = mongoose.model("Booking", bookingSchema);