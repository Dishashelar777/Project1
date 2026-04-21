import React from 'react';
import { Card, CardHeader, Typography } from '@mui/material';

const UserReviewCard = ({ review, userName }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 493 },
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        border: '1px solid #E0E0E0',
        boxShadow: 3,
      }}
    >
      <CardHeader
        title={
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {review}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2" color="text.secondary">
            {userName}
          </Typography>
        }
        sx={{
          padding: { xs: 1, sm: 2 },
        }}
      />
    </Card>
  );
};

export default UserReviewCard;

