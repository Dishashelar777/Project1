import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CarCard = () => {
  return (
    <Card sx={{ width: 286, height: 357, backgroundColor: "#FB0600", borderRadius: 4,
     boxShadow: 3,
     border: '1px solid #E0E0E0',
     }}>
      <CardMedia
        component="img"
        alt="Hyundai Accent"
        height="140"
        image="https://example.com/your-image.jpg" // Replace with your actual image URL
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sedan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: 4 + Driver
          <br />
          Luggage: 2 Big + 2 Small
          <br />
          Music Player: Yes
          <br />
          AC: Yes
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="white"
        fullWidth
        sx={{ width: 250, height: 33, alignContent: "center" }}
      >
        BOOK
      </Button>
    </Card>
  );
};

export default CarCard;
