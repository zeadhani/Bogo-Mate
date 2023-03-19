import { Box, Grid } from "@mui/material";
import React from "react";
import BrandItem from "./BrandItem";

function BrandsItems({ brands, matches }) {
  return (
    <Grid item xs={matches ? 12 : 9}>
      <Box ml={matches ? 0 : 2}>
        <Grid container spacing={2}>
          {brands?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <BrandItem brand={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default BrandsItems;
