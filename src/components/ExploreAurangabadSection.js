import React, { useState } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Carousel from "react-material-ui-carousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TouristDestinationCard from "./TouristDestinationCard";

// Create a theme to pass into ThemeProvider
const theme = createTheme();

const ExploreAurangabadSection = () => {
  const [index, setIndex] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cardsData = [
    {
      image: `${process.env.PUBLIC_URL}/images/kailashtemple.jpg`,
      title: "Kailash Temple",
      description:
        "The Kailasha or Kailashanatha temple is the largest of the rock-cut temples at the Ellora Caves.",
      link: "https://en.wikipedia.org/wiki/Kailasa_temple,_Ellora",
      loading: "lazy",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/dulatabadfort.jpg`,
      title: "Dulatabad Fort",
      description:
        "It was the capital of the Yadavas, a secondary capital of the Ahmadnagar Sultanate.",
      link: "https://en.wikipedia.org/wiki/Daulatabad,_Maharashtra",
      loading: "lazy",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/bibikamahal.jpg`,
      title: "Bibi Ka Makbara",
      description:
        "Known as the Mini Taj of the Deccan, commissioned by Aurangzeb's son in 1660.",
      link: "https://en.wikipedia.org/wiki/Bibi_Ka_Maqbara",
      loading: "lazy",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/grishneshwartemple.jpg`,
      title: "Grishneshwar",
      description:
        "Grishneshwar Jyotirlinga is a Hindu temple of Shiva, one of the 12 Jyotirlingas.",
      link: "https://en.wikipedia.org/wiki/Grishneshwar_Temple",
      loading: "lazy",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Ajantacaves.jpg`,
      title: "Ajanta Caves",
      description:
        "The Ajanta Caves are 30 rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE ",
      link: "https://en.wikipedia.org/wiki/Ajanta_Caves",
      loading: "lazy",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/PanChaki.jpg`,
      title: "Panchakki",
      description:
        "Panchakki, a water mill, is located in Aurangabad, Maharashtra, displays the scientific thought process put in medieval Indian architecture.",
      link: "https://en.wikipedia.org/wiki/Panchakki",
      loading: "lazy",
    },
  ];

  // Group cards into sets of three
  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += 3) {
    groupedCards.push(cardsData.slice(i, i + 3));
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
          backgroundColor: "#FB0606",
          width: "100vw",
          py: 10,
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            color="white"
            align="center"
            sx={{ fontWeight: "bold", mb: 8 }}
          >
            Explore Sambhaji Nagar
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              alignContent: "center",
              px: isSmallScreen ? 2 : 4,
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            <Carousel
              index={index}
              onChange={(event, value) => setIndex(value)}
              animation="slide"
              indicators
              navButtonsProps={{
                sx: {
                  "& .MuiIconButton-root": {
                    backgroundColor: "rgba(255,255,255,0.7)",
                    color: "#B71C1C",
                  },
                },
              }}
              autoPlay={false}
              interval={10000}
              stopAutoPlayOnHover={true}
              swipe
              navButtonsAlwaysVisible={false}
              sx={{ width: "100%" }}
            >
              {groupedCards.map((group, idx) => (
                <Grid container spacing={2} key={idx}>
                  {group.map((card, cardIdx) => (
                    <Grid
                      item
                      xs={12}
                      sm={isSmallScreen ? 12 : 4}
                      key={cardIdx}
                    >
                      <TouristDestinationCard
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                      />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ExploreAurangabadSection;

