import { Box, Typography } from "@mui/material";
import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const link =
  "https://res.cloudinary.com/df2862din/image/upload/v1678116941/pexels-pixabay-356056_bjyyrg.jpg";
function CategoryItem({ item }) {
  const navigate = useNavigate();
  const handleCategoryNavigation = (name) => () => {
    const params = {
      rowsPerPage: 10,
      page: 0,
      sort: "createdAt",
      orderBy: "asc",
      search: "",
      preferences: [name],
    };
    navigate({
      pathname: `/Shop`,
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(30, 30, 30, 0.8)), url(${link})`,
        p: 3,
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={handleCategoryNavigation(item.name)}
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
