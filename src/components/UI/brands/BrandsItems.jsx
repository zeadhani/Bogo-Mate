import { Grid } from "@mui/material";
import React from "react";
import BrandItem from "./BrandItem";

function BrandsItems({ brands }) {
  return (
    <Grid container spacing={2} >
      {brands?.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <BrandItem brand={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BrandsItems;
