import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "electronics" },
  { id: 2, name: "Perfumes" },
  { id: 3, name: "Clothes" },
  { id: 4, name: "Supplements" },
  { id: 5, name: "Furniture" },
  { id: 6, name: "Vacations" },
  { id: 7, name: "real estate" },
];
function CategoriesHomePage({ matches }) {
  return (
    <Box my={3}>
      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <Typography
          variant={matches ? "h6" : "h4"}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          Shop by categories
        </Typography>
        <Typography
          variant={matches ? "caption" : "h6"}
          fontWeight={700}
          textTransform={"uppercase"}
          // color={"#f5f5f5"}
        >
          <Link to="/about" style={{ color: "#222" }}>
            see more &rarr;
          </Link>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid item xs={6} md={4} key={item.id}>
            <CategoryItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoriesHomePage;
