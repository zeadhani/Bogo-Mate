import { Box, Typography } from "@mui/material";
import React from "react";

function OtherProducts() {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Other Products You May Like
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Product 1
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Product 2
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Product 3
      </Typography>
    </Box>
  );
}

export default OtherProducts;
