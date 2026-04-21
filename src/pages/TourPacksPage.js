import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography, Container, Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

const TourPacksPage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ width: "100%", backgroundColor: "white", py: 8 }}>
        
        <Typography variant="h3" align="center" gutterBottom sx={{ mt: -2 }}>
          Tour Packages
        </Typography>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                backgroundColor: "white",
              },
              mt: 10,
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src="images/elloracaves2.jpg"
              alt="Tour packages"
              sx={{
                width: { xs: "100%", md: 470 },
                height: 320,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: 2,
                mb: { xs: 4, md: 0 },
                mr: { md: 12 },
              }}
            />
            {/* Text Section */}
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="error"
                fontSize={40}
                fontWeight="medium"
                gutterBottom
              >
                Ellora Caves and City Tour
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                {[
                  "Daultabad Fort",
                  "Ellora Caves",
                  "Grishneshwar Temple",
                  "Khuldabad ",
                  "Bibi Ka Maqbara",
                  "Panchakki",
                  "Ajanta Caves",
                ].map((place, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    key={index}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: 18 }} />
                    <Typography variant="body1">{place}</Typography>
                  </Box>
                ))}
              </Box>
              <Link to="/booking">
                <Button variant="contained" color="error" size="medium">
                  Book Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
          backgroundColor: "#db352a",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
              justifyContent: "space-between",
              mt: { xs: 2, md: 0 },
            }}
          >
            {/* Text Section */}
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontSize={40}
                fontWeight="medium"
                gutterBottom
              >
                South India Tours
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 1,
                  color: "white",
                }}
              >
                {[
                  "Bijapur Site",
                  "pattadakal",
                  "Aihole",
                  "Badami",
                  "Hampi",
                ].map((place, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    key={index}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ mr: 1, fontSize: 18, color: "white" }}
                    />
                    <Typography variant="body1">{place}</Typography>
                  </Box>
                ))}
              </Box>
              <Link to="/booking">
                <Button
                  variant="contained"
                  color="inherit"
                  size="medium"
                  sx={{ backgroundColor: "white", color: "red" }}
                >
                  Book Now
                </Button>
              </Link>
            </Box>
            {/* Image Section */}
            <Box
              component="img"
              src="images/Hampi.jpg"
              alt="Tour packages"
              sx={{
                width: { xs: "100%", md: 470 },
                height: 320,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: 4,
                mb: { xs: 4, md: 0 },
                ml: { md: 12 },
              }}
            />
          </Box>
        </Container>
      </Box>{" "}
      <Box sx={{ width: "100%", backgroundColor: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                backgroundColor: "white",
              },
              mt: 10,
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src="images/shirdi2.jpeg"
              alt="Tour packages"
              sx={{
                width: { xs: "100%", md: 470 },
                height: 320,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: 2,
                mb: { xs: 4, md: 0 },
                mr: { md: 12 },
              }}
            />
            {/* Text Section */}
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="error"
                fontSize={40}
                fontWeight="medium"
                gutterBottom
              >
                Shirdi/ Shani Shignapur Tour
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                {[
                  "Shirdi",
                  "Shani Shignapur",
                  "Nashik City",
                  "Paithan City",
                ].map((place, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    key={index}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: 18 }} />
                    <Typography variant="body1">{place}</Typography>
                  </Box>
                ))}
              </Box>
              <Link to="/booking">
                <Button variant="contained" color="error" size="medium">
                  Book Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default TourPacksPage;

