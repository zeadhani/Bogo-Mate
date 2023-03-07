import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Box, Grid, Pagination, useMediaQuery } from "@mui/material";
import ProductsFilter from "../../components/UI/products/ProductsFilter";
import Products from "../../components/UI/products/Products";

function ProductsDashboard() {
  const { brand } = useParams();
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer nav={`/shop/${brand}`}>
      <Grid container spacing={2} mb={4}>
        {!matches && (
          <Grid item xs={3}>
            <ProductsFilter matches={matches} />
          </Grid>
        )}

        <Grid item xs={matches ? 12 : 9}>
          <Products matches={matches} />
          <Box display={"flex"} justifyContent={"center"}>
            <Pagination count={10} sx={{ mt: 5 }} color="primary" />
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ProductsDashboard;
