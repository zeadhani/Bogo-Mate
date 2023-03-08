import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

function ProductItems({products}) {
  return (
    <Grid container spacing={2} sx={{minHeight:"50vh"}}>
      {products?.map((item) => (
        <Grid item key={item.id} xs={6} md={4}>
          <ProductItem product={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductItems;
