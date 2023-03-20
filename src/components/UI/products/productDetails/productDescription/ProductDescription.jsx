import { Box, Typography } from "@mui/material";
import React from "react";
import CustomRating from "./Rating";
import Attributes from "./Attributes";
import Requests from "./Requests";

function ProductDescription({ name, brand, price, reviews, attributes }) {
  return (
    <Box p={2}>
      <Box display={"flex"} gap={1}>
        <Typography variant="h3" fontWeight={900}>
          {name}
        </Typography>
        <Typography variant="caption" gutterBottom alignSelf={"flex-end"}>
          -{brand}
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        {price} EGP
      </Typography>
      <CustomRating reviews={reviews} />
      <Attributes />
      <Requests />
    </Box>
  );
}

export default ProductDescription;
