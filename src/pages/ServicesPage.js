import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VehicleCard from '../components/VehicleCard';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ServicesPage = () => {
  return (
    <>
      <div>
        
        <Header />
        <Container maxWidth="lg">
          
        
        {/* hire car section */}
       <img
      src="illustrations/traffic cone.png"
      alt="traffic cone."
      style={{
        position: "relative",
        left: -170   ,
        top: 540,
        width: 150,
        height: 200, // clipPath: "polygon(0 0, 60% 0%, 100% 70%, 0 100%)",
        display: window.innerWidth < 600 ? "none" : "block",
      }}
       />
       <img
      src="illustrations/road going into the distance.png"
      alt="road going into the distance."
      style={{
        position: "relative",
        right: -940,
        top: 170,
        width: 400,
        height: 350,
  
        // clipPath: "polygon(0 0, 60% 0%, 100% 70%, 0 100%)",
        display: window.innerWidth < 600 ? "none" : "block",
      }}
        />
       <Box
          sx={{
            width: "100%",
            
            mt: -65
          }}
        >

         
            <Typography
              variant="h3"
              component="h1"
              sx={{ mt: 4, mb: 2, textAlign: "center" }}
            >
              Services
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{ ml: 2, mt: 8, display: "flex" }}
            >
              <CheckCircleOutlineIcon
                sx={{ mr: 2, scale: 1.2, alignContent: "center" }}
              />
              Hire cars in budget
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 8,
                my: 8,
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <VehicleCard
                image={"./images/SedanCar.jpg"}
                name={"Sedan"}
                description={
                  "Capacity: 4 + Driver, Luggage: 2 Big + 2 Small, Music Player: Yes, AC: Yes"
                }
                sx={{ width: { xs: "100%", md: "unset" } }}
              />
              <VehicleCard
                image={"./images/InnovaCar.jpg"}
                name={"Innova"}
                description={
                  "Capacity: 4 + Driver, Luggage: 2 Big + 2 Small, Music Player: Yes, AC: Yes"
                }
                sx={{ display: { xs: "none", md: "block" } }}
              />
            </Box>
        </Box>
          </Container>
          
        {/* hire tempo traveler section */}
        <Box
          sx={{
            width: "100%",
            height: "auto",

            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
            backgroundColor: "#db352a",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{ ml: 2, mt: 4, display: "flex", color: "white", pt: 10 }}
            >
              <CheckCircleOutlineIcon
                sx={{ mr: 2, scale: 1.2, alignContent: "center" }}
              />
              Hire cars Temp Traveler
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 8 },
                my: 4,
                py: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <VehicleCard
                image={"./images/TempotTaveller.jpg"}
                name={"14 Seater Temp Traveler"}
                description={
                  "Capacity: 14 + 1, Driver Luggage: 5 Big + 4 Small, Music Player: Yes, AC: Yes"
                }
                version="white"
                sx={{ width: { xs: "100%", md: "unset" } }}
              />
              <VehicleCard
                image={"./images/TempoTraveller2.jpg"}
                sx={{
                  height: 300,
                  width: 500,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                name={"20 Seater Temp Traveler"}
                description={
                  "Capacity: 20 + 1, Driver Luggage: 5 Big + 4 Small, Music Player: Yes, AC: Yes"
                }
                version="white"
              />
              <VehicleCard
                image={"./images/TempoTraveller3.jpg"}
                name={"26 Seater Temp Traveler"}
                description={
                  "Capacity: 26 + 1, Driver Luggage: 5 Big + 4 Small, Music Player: Yes, AC: Yes"
                }
                version="white"
                sx={{ width: { xs: "100%", md: "unset" } }}
              />
            </Box>
          </Container>
        </Box>
        {/* hire bus section */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{ ml: 2, mt:-4,  display: "flex", color: "black", pt: 10 }}
            >
              <CheckCircleOutlineIcon
                sx={{ mr: 2, scale: 1.2, alignContent: "center" }}
              />
              Hire Bus
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 8,
                mt: 8,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <VehicleCard
                image={"./images/Bus1.jpg"}
                sx={{
                  height: 300,
                  width: { xs: "100%", md: 500 },
                  objectFit: "cover",
                }}
                name={"49 Seater large Bus"}
                description={
                  "Capacity: 49 + 1, Driver Music Player: Yes, AC: Yes"
                }
                version="red"
              />
              <VehicleCard
                image={"./images/Bus2.jpg"}
                sx={{
                  height: 300,
                  width: { xs: "100%", md: 500 },
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                name={"41 Seater Volvo Bas"}
                description={
                  "Capacity: 41 + 1, Driver Music Player: Yes, AC: Yes"
                }
                version="red"
              />
            </Box>{" "}
          </Container>{" "}
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
