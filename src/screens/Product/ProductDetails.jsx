import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

function ProductDetails() {
  const { brand, product } = useParams();
  return (
    <CustomContainer nav={`/shop/${brand}/${product}`}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={9} >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box p={2}>
                <img
                  src="https://res.cloudinary.com/df2862din/image/upload/v1677278946/xgagzhtq8odcsryuuaoj.png"
                  alt="Product"
                  width={"100%"}
                  style={{ objectFit: "contain", borderRadius: "5px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8} alignSelf={"center"}>
              <Box p={2}>
                <Typography variant="h5" gutterBottom>
                  Product Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $99.99
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et nulla porta, eleifend sapien ac, aliquam orci. Aenean a
                  tortor mauris. Nullam aliquet diam vel metus volutpat
                  imperdiet.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                  Add to Cart
                </Button>
                <Box mt={2}>
                  <Typography variant="h6" gutterBottom>
                    Safe Payments
                  </Typography>
                  <img src="https://via.placeholder.com/50x50" alt="Logo 1" />
                  <img src="https://via.placeholder.com/50x50" alt="Logo 2" />
                  <img src="https://via.placeholder.com/50x50" alt="Logo 3" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={2}>
                <Divider />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Customer Reviews
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et nulla porta, eleifend sapien ac, aliquam orci. Aenean a
                  tortor mauris. Nullam aliquet diam vel metus volutpat
                  imperdiet.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Product Description
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et nulla porta, eleifend sapien ac, aliquam orci. Aenean a
                  tortor mauris. Nullam aliquet diam vel metus volutpat
                  imperdiet.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Other Products You May Like
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Product 1
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Product 2
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Product 3
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ProductDetails;
