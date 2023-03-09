import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ProductDescription() {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom fontWeight={900}>
        Product Name
      </Typography>
      <Typography variant="h6" gutterBottom>
        99.99 EGP
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla
        porta, eleifend sapien ac, aliquam orci. Aenean a tortor mauris. Nullam
        aliquet diam vel metus volutpat imperdiet.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Join pool
      </Button>
    </Box>
  );
}

export default ProductDescription;
