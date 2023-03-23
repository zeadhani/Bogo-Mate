import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ProductImage from "../../components/UI/products/productDetails/productImage";
import ProductReviewsAndDescription from "../../components/UI/products/productDetails/Reviewsanddescription";
import OtherData from "../../components/UI/products/productDetails/OtherProducts";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
import useProductDetailsData from "../../hooks/products/productDetails/useProductDetailsData";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import HocDescription from "../../components/UI/products/productDetails/HocDescription";

function ProductDetails() {
  const { brand, product } = useParams();
  const matches = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const { isError, isLoading, state } = useProductDetailsData({
    name: product,
  });

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }

  return (
    <>
      <CustomContainer nav={`/shop/${brand}/${product}`}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <ProductImage image={state?.product?.image} />
              </Grid>
              <Grid item xs={12} md={7} alignSelf={"center"}>
                <HocDescription
                  id={state?.product?.id}
                  name={state?.product?.name}
                  brand={state?.product?.Brands.name}
                  price={state?.product?.price}
                  reviews={state?.reviews}
                  completedRequests={state?.completedRequests}
                  requestsLeft={state?.requestsLeft}
                  hasAttributes={state?.product?.hasAttributes}
                  count={state?.product?.count}
                  productItems={state?.product?.productItems}
                  offerId={state?.product?.offersId}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
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
                <ProductReviewsAndDescription reviews={state?.reviews} />
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
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}

export default ProductDetails;
