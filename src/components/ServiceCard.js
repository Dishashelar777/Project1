import React from "react";
import {
  Card,
  CardContent,
  Typography, 
  Button,
  CardMedia,
  Link
} from "@mui/material";

const ServiceCard = ({ serviceTitle, imagePath }) => {
  return (
    <Card
      sx={{
        width: 294,
        height: 346,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 3,
        border: "0.3px solid black",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={imagePath} 
          alt="Service Image"
          sx={{
            width: 134,
            height: 162,
            borderRadius: 1,
            objectFit: 'contain',
          }}
        />

        {/* Service Title */}
        <Typography variant="h5" gutterBottom sx={{ color: "#FB0606" } }>
          {serviceTitle}
        </Typography>
        {/* Book Now Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FB0606",
            width: 140,
            height: 30,
            "&:hover": {
              backgroundColor: "#d90404",
            },
          }}
          component={Link}
          href="/booking"
        >
          BOOK NOW
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

