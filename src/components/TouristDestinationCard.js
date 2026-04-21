import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Link } from '@mui/material';

const TouristDestinationCard = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Card
      sx={{
        width: 340,
        height: 464,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        border: '1px solid #E0E0E0',
        boxShadow: 3,
        borderWidth: 0.5,
        borderColor: 'black',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: 250,
          height: 202,
          borderRadius: 4,
          border: '1px solid #E0E0E0',
          boxShadow: 3,
          mx: 'auto', // Centers the image horizontally
          mt: 2, // Adds margin-top to create space from the top
        }}
      />
      <CardContent sx={{ pt: 4, pb: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'semibold' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            fontSize: 12,
            fontWeight: 'semibold',
            mt: 2, // Adds margin-top to create space from the heading
          }}
        >
          {description}
        </Typography>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              sx={{
                boxShadow: 2,
                backgroundColor: '#FB0606',
                '&:hover': {
                  backgroundColor: '#d90404',
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TouristDestinationCard;

