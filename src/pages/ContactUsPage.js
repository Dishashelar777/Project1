import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUsPage = () => {
  return (
    <Box>
      <Header />
      <Box >
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{ mt: 4 }}
        >
          Contact Us
        </Typography>

        {/* About Us section */}
        <Container maxWidth="lg" sx={{ mb: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: { xs: "center", md: "space-between" },
              mt: 10,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                mr: { xs: 0, md: 10 },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", mb: 3, color: "red" }}
                  />
                  Maldar Lodging, Chadanpuri, Malegaon, Nashik
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    mt: 2,
                  }}
                >
                  <PhoneIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", color: "red" }}
                  />
                  Mobile: +91 9356652589,

                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    mt: 2,
                  }}
                >
                  <EmailIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", color: "red" }}
                  />
                  <span style={{ verticalAlign: "middle" }}>
                    {/* <b style={{ color: "red" }}>Email</b>: */}
                    <a
                      
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      dishashelar196@gmail.com
                    </a>
                  </span>
                </Typography>

              </Box>
            </Box>
            <Box

            />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUsPage;
