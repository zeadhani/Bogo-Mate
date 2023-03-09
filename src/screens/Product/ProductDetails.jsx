import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductImage from "../../components/UI/products/productDetails/productImage";
import ProductDescription from "../../components/UI/products/productDetails/ProductDescription";
import ProductReviewsAndDescription from "../../components/UI/products/productDetails/Reviewsanddescription";
import OtherProducts from "../../components/UI/products/productDetails/OtherProducts";
import ProductItems from "../../components/UI/products/ProductItems";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
const products = [
  { id: 1, name: "product 1", brand: "H&M" },
  { id: 2, name: "product 2", brand: "H&M" },
  { id: 3, name: "product 3", brand: "H&M" },
  { id: 4, name: "product 4", brand: "H&M" },
  { id: 5, name: "product 5", brand: "H&M" },
  { id: 6, name: "product 6", brand: "H&M" },
  { id: 7, name: "product 7", brand: "H&M" },
  { id: 8, name: "product 8", brand: "H&M" },
  { id: 9, name: "product 9", brand: "H&M" },
  { id: 10, name: "product 10", brand: "H&M" },
];
function ProductDetails() {
  const { brand, product } = useParams();
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer nav={`/shop/${brand}/${product}`}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ProductImage
                image={
                  "https://res.cloudinary.com/df2862din/image/upload/v1678370664/xgagzhtq8odcsryuuaoj.png"
                }
              />
            </Grid>
            <Grid item xs={12} md={8} alignSelf={"center"}>
              <ProductDescription />
            </Grid>
            <Grid item xs={12}>
              <Box p={2}>
                <Divider />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ProductReviewsAndDescription />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <OtherProducts />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductCarousel
            matches={matches}
            title={"Products you may  like"}
            products={products}
          />
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ProductDetails;
