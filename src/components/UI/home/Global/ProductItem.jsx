import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Requests from "../../Global/Requests";
import useRequests from "../../../../hooks/global/useRequests";

function ProductItem({ product, matches }) {
  const navigate = useNavigate();
  const handleNavigate = (brand, item) => () => {
    navigate(`/Shop/${brand}/${item}`);
  };

  const { completedRequests, requestsLeft } = useRequests({ product });
  const isBiggerThan0 = (element) => element.count > 0;
  const inStock =
    product?.count > 0 || product?.productItems?.some(isBiggerThan0);
  return (
    <Box
      sx={{
        borderRadius: "5px",
        paddingX: 2,
        paddingY: 1,
        cursor: "pointer",
      }}
      bgcolor={"#f5f5f5"}
      onClick={handleNavigate(product.Brands.name, product.name)}
    >
      <Box
        sx={{
          width: { xs: "120px", sm: "150px", md: "180px", lg: "200px" },
          mb: "auto",
          position: "relative",
        }}
      >
        <LazyLoadImage
          style={{ objectFit: "contain", borderRadius: "5px" }}
          width="100%"
          alt="productImage"
          src={`${process.env.REACT_APP_CLOUDINARY}${product.image}`}
        />

        {!inStock && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.8)",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <Typography
              variant={matches ? "body2" : "h6"}
              textTransform="uppercase"
            >
              Out of Stock
            </Typography>
          </Box>
        )}
      </Box>
      <Divider />
      <Typography textAlign={"left"} variant={matches ? "h5" : "h3"} mt={2}>
        {product.name}
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "h6" : "h4"}>
        {product.Brands.name}
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "caption" : "h5"}>
        {product.price} EGP
      </Typography>
      <Requests
        completedRequests={completedRequests}
        requestsLeft={requestsLeft}
      />
    </Box>
  );
}

export default ProductItem;
{
  /* <Typography
sx={{
  // position: "absolute",
  // bottom: 2,
  // left: "50%",
  // transform: "translateX(-50%)",
  // bgcolor: "red",
  // color: "#f5f5f5",
  // top: 4,
  // right: 4,
  // py: "2px",
  // px: "5px",
  // borderRadius: "7px",
}}
>
out of stock
</Typography> */
}
