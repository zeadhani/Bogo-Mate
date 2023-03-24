import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

function CategoriesHomePage({ categories, matches }) {

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
       
      </Box>
      <Grid container spacing={2}>
        {categories?.map((item) => (
          <Grid item xs={6} md={4} key={item.name}>
            <CategoryItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoriesHomePage;
