import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingConfirmation from "../components/BookingConfirmation ";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BookingConfirmationPage = () => {
  const theme = useTheme(); // Get the theme object

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 }, // Adjust margin-top for smaller devices
            mb: { xs: 4, md: 8 }, // Adjust margin-bottom for smaller devices
            transform: "scale(0.9)", // Default scale for larger screens
            [theme.breakpoints.down("sm")]: {
              transform: "scale(0.75)", // Slightly larger scale for small devices
            },
          }}
        >
          <BookingConfirmation />
        </Box>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default BookingConfirmationPage;
