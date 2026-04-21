import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const VehicleCard = ({
  image,
  name,
  description,
  version = "red", // 'red' for first version, 'white' for second version
}) => {
  const isRedVersion = version === "red";

  const cardStyles = {
    width: "286px",
    backgroundColor: isRedVersion ? "#db352a" : "#FFFFFF",
    color: isRedVersion ? "#FFFFFF" : "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    padding: "16px",
    boxSizing: "border-box",
    border: "0.3px solid black",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const buttonStyles = {
    width: "250px",
    backgroundColor: isRedVersion ? "#FFFFFF" : "#db352a",
    color: isRedVersion ? "#db352a" : "#FFFFFF",
    borderRadius: "4px",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "16px",
    textTransform: "none",
    fontSize: "16px",  };

  return (
    <Card style={cardStyles}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        style={{ width: "250px", height: "160px", objectFit: "contain", borderRadius: 4 }}
        sx={{
          // Adjust the image size to fit in the defined size
          width: "200%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <CardContent style={{ textAlign: "center", padding: "8px 0" }}>
        <Typography
          variant="h5"
          style={{ fontSize: "26px", fontWeight: "500", textAlign: "center" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          style={{ marginTop: "8px", fontSize: "14px", textAlign: "center" }}
        >
          {description}
        </Typography>                            </CardContent>
      <Link to="/booking">
        <Button style={buttonStyles}>Book</Button>
      </Link>
    </Card>
  );
};

export default VehicleCard;
