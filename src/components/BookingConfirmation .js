import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BookingConfirmation = () => {
  return (
    <Box
      sx={{
        height: 600,
        width: 600,
        display: "flex", // Center content
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white", // Light grey background
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.0.4) 0%, rgba(0,0,0,0) 100%)",
      
        border: "0.2px solid black",
        borderRadius: 4, // Red border
        boxShadow: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* CheckCircleFilled Icon */}
        <CheckCircleIcon
          sx={{
            color: "#D50000", // Red color
            fontSize: 200, // Icon size
          }}
        />

        {/* Booking Successful Text */}
        <Typography variant="h4" sx={{ mt: 8, fontWeight: "bold" }}>
          Booking Successful
        </Typography>

        {/* We will contact you shortly */}
        <Typography variant="h6" sx={{ mt: 2, color: "#555" }}>
          We will contact you shortly
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingConfirmation;
