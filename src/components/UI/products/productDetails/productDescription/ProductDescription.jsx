import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomRating from "./Rating";
import Attributes from "./Attributes";
import Requests from "./Requests";

function ProductDescription({ matches }) {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom fontWeight={900}>
        Product Name
      </Typography>
      <Typography variant="h6" gutterBottom>
        99.99 EGP
      </Typography>
      <CustomRating />
      <Attributes />
      <Requests />
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        sx={{ mt: 2 }}
      >
        Join pool
      </Button>
    </Box>
  );
}

export default ProductDescription;
