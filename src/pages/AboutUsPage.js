import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Box, Typography } from '@mui/material';


function AboutUsPage() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden", // Ensure there's no horizontal overflow
        }}
      >
        <Header />
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            textAlign={"center"}
            sx={{ mt: 4 }}
          >
            About Us
          </Typography>

          {/* About Us section */}
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mt: 10,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  mr: { md: 10 },
                  mb: { xs: 5, md: 0 },
                }}
              >
                <Typography variant="body2" gutterBottom>
                  <b style={{ color: "red" }}>Maldar Tours and Travels</b>
                  
                </Typography>
              </Box>
              
            </Box>
          </Container>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mt: 15,
                mb: 15,
              }}
            >
              
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  ml: { md: 10 },
                  mt: { xs: 5, md: 0 },
                }}
              >
                <Typography variant="body2" gutterBottom>
                  <b style={{ color: "red" }}></b> 
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

export default AboutUsPage;
