import { Box, Rating, Typography } from "@mui/material";
import React from "react";

function CustomRating({ value, reviewsCount }) {
  return (
    <Box display={"flex"} gap={1} mb={1}>
      <Rating value={value} readOnly precision={0.5}/>
      <Typography variant="caption" alignSelf={"center"}>
        {reviewsCount} Ratings
      </Typography>
    </Box>
  );
}

export default CustomRating;
