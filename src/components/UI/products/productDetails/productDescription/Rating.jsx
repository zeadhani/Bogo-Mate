import { Box, Rating, Typography } from "@mui/material";
import React from "react";

function CustomRating({reviews}) {
  const [value, setValue] = React.useState(2);
  return (
    <Box display={"flex"} gap={1} mb={1}>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography variant="caption" alignSelf={"center"}>
      {reviews.length} Ratings
      </Typography>
    </Box>
  );
}

export default CustomRating;
