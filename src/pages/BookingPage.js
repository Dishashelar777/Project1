import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm";
import { Box } from "@mui/material";

const BookingPage = () => {
  return (
    <div>
      <Header />
      <Box mt={-2} mb={-8} sx={{transform: "scale(0.8)"}}>
        <BookingForm  />
      </Box>
      <Footer />
    </div>
  );
};

export default BookingPage;
