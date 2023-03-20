import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Box, Divider, Grid, useMediaQuery } from "@mui/material";
import ProductImage from "../../components/UI/products/productDetails/productImage";
import ProductDescription from "../../components/UI/products/productDetails/productDescription/ProductDescription";
import ProductReviewsAndDescription from "../../components/UI/products/productDetails/Reviewsanddescription";
import OtherData from "../../components/UI/products/productDetails/OtherProducts";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
import useProductDetailsData from "../../hooks/products/productDetails/useProductDetailsData";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";

import JoinPool from "../../components/UI/products/productDetails/productDescription/JoinPool";
function ProductDetails() {
  const { brand, product } = useParams();
  const matches = useMediaQuery("(max-width:800px)");
  const { isError, isLoading, state } = useProductDetailsData({
    name: product,
  });
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  console.log(state?.product);
  return (
    <CustomContainer nav={`/shop/${brand}/${product}`}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <ProductImage image={state?.product?.image} />
            </Grid>
            <Grid item xs={12} md={7} alignSelf={"center"}>
              <ProductDescription
                name={state?.product?.name}
                brand={state?.product?.Brands.name}
                price={state?.product?.price}
                reviews={state.reviews}
              />
              <JoinPool />
            </Grid>
            <Grid item xs={12}>
              <Box p={2}>
                <Divider />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} md={9}>
              <ProductReviewsAndDescription />
              <ProductCarousel
                matches={matches}
                title={"Products you may  like"}
                products={state?.relatedItems}
                productDetails={"true"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <OtherData matches={matches} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ProductDetails;
