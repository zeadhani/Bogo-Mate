import { Box, Typography } from "@mui/material";
import React from "react";

const link =
  "https://res.cloudinary.com/df2862din/image/upload/v1678116941/pexels-pixabay-356056_bjyyrg.jpg";
function CategoryItem({ item }) {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(30, 30, 30, 0.8)), url(${link})`,
        p: 3,
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      <Typography
        variant="h5"
        textAlign={"center"}
        color={"#f5f5f5"}
        fontWeight={"bold"}
      >
        {item.name}
      </Typography>
    </Box>
  );
}

export default CategoryItem;
