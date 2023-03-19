import { Box, Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

function ProductItems({ products, matches }) {
  return (
    <Grid item xs={matches ? 12 : 9}>
      <Box ml={matches ? 0 : 2}>
        <Grid container spacing={2}>
          {products?.map((item) => (
            <Grid item key={item.id} xs={6} md={4} lg={3}>
              <ProductItem product={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default ProductItems;
