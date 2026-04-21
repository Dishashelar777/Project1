import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const BookingForm = () => {
  // ✅ booking success state
  const [isBooked, setIsBooked] = useState(false);

  // States for form inputs
  const [dateTime, setDateTime] = useState(dayjs());
  const [serviceType, setServiceType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [tourType, setTourType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleServiceChange = (event) => {
    setServiceType(event.target.value);
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    if (
      serviceType === "" ||
      (serviceType === "Hire Vehicle" && vehicleType === "") ||
      (serviceType === "Book a Tour" && tourType === "") ||
      name.trim() === "" ||
      email.trim() === "" ||
      mobile.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceType,
          vehicleType,
          tourType,
          name,
          email,
          mobile,
          dateTime: dateTime.toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsBooked(true); // ✅ show success + button
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "90vw", md: "920px" },
        borderRadius: 4,
        border: "1px solid #E0E0E0",
        boxShadow: 3,
        padding: 4,
        margin: "auto",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        Booking
      </Typography>

      <Grid container spacing={3} my={6} px={4}>
        {/* Service */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Select Service</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Select Service</InputLabel>
            <Select value={serviceType} onChange={handleServiceChange}>
              <MenuItem value="Hire Vehicle">Hire Vehicle</MenuItem>
              <MenuItem value="Hire a Guide">Hire a Guide</MenuItem>
              <MenuItem value="Book a Tour">Book a Tour</MenuItem>
              <MenuItem value="Book Hotel">Book Hotel</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Vehicle */}
        {serviceType === "Hire Vehicle" && (
          <>
            <Grid item xs={12} md={6}>
              <Typography>Select Vehicle</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Select Vehicle</InputLabel>
                <Select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <MenuItem value="Car">Car</MenuItem>
                  <MenuItem value="Van">Tempo Traveler</MenuItem>
                  <MenuItem value="Bus">Bus</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        )}

        {/* Date */}
        <Grid item xs={12} md={6}>
          <Typography>Select Date & Time</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker value={dateTime} onChange={setDateTime} />
          </LocalizationProvider>
        </Grid>

        {/* Name */}
        <Grid item xs={12} md={6}>
          <Typography>Name</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={6}>
          <Typography>Email</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Mobile */}
        <Grid item xs={12} md={6}>
          <Typography>Mobile</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#FB0606" }}
            onClick={handleSubmit}
          >
            Confirm Booking
          </Button>
        </Grid>
      </Grid>

      {/* ✅ SUCCESS + ADMIN BUTTON */}
      {isBooked && (
        <Box textAlign="center" mt={3}>
          <Typography variant="h5" color="green">
            Booking Confirmed ✅
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#db352a" }}
            onClick={() => (window.location.href = "/admin")}
          >
            Go to Admin Page
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BookingForm;