import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Box, Grid, Pagination, useMediaQuery, useTheme } from "@mui/material";
import ProductsFilter from "../../components/UI/products/ProductsFilter";
import Products from "../../components/UI/products/Products";
import HeaderImage from "../../components/UI/Global/Header";

function ProductsDashboard() {
  const { brand } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <CustomContainer nav={`/shop/${brand}`}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            matches={matches}
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <ProductsFilter matches={matches} />
        </Grid>

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
