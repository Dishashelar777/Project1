import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#B71C1C",
        py: 4, // Padding for better spacing on small screens
        mt: 10,
      }}
    >
      {/* Main Footer Container */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Column */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="white"
              gutterBottom
              sx={{ textTransform: "uppercase", mb: 2 }}
            >
              Company
            </Typography>
            <Typography>
              <Link
                to="/services"
                style={{ color: "white", textDecoration: "none" }}
              >
                Services
              </Link>
            </Typography>
            <Typography>
              <Typography>
                <Link
                  to="/tour-packs"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Tours Pack
                </Link>
              </Typography>
              <Link
                to="/about-us"
                style={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/contact-us"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </Typography>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="white"
              gutterBottom
              sx={{ textTransform: "uppercase", mb: 2 }}
            >
              Services
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Hire Vehical
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Book Train Ticket
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Book Bus ticket
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
              
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Hire Guide
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
              </Link>
            </Typography>
            <Typography>
              <Link
                to="/booking"
                style={{ color: "white", textDecoration: "none" }}
              >
                Hotel Booking
              </Link>
            </Typography>
          </Grid>

          {/* Get in Touch Column */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="white"
              gutterBottom
              sx={{ textTransform: "uppercase", mb: 2 }}
            >
              Get in Touch
            </Typography>
            <Typography color="white">+91 9356652589</Typography>
            <Typography color="white">+91 9370693640</Typography>
            <Typography color="white">+91 9767550665</Typography>
            <Typography color="white">
              <Link
                href="mailto:atkadam@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                dishashelar196@gmail.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Text Outside Container */}
      <Box
        sx={{
          textAlign: { xs: "center", sm: "right" },
          mt: 4,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="body2" color="white">
          &copy; Copyright Maldar Tours and Travel
        </Typography>
        <Typography variant="body2" color="white" sx={{ mt: 1 }}>
          <a
            href="https://kpswebdev.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            
          </a>
        </Typography>


      </Box>
    </Box>
  );
};

export default Footer;

