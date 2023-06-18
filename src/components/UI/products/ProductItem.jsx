import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Requests from "../Global/Requests";
import useRequests from "../../../hooks/global/useRequests";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductItem({ product }) {
  const matches = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const handleNavigate = (brand, item) => () => {
    navigate(`/shop/${brand}/${item}`);
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
        height: "100%",
      }}
      bgcolor={"#f5f5f5"}
      onClick={handleNavigate(product.Brands.name, product.name)}
    >
      <Box sx={{ position: "relative" }}>
        <LazyLoadImage
          alt="images"
          width={"100%"}
          src={`${process.env.REACT_APP_CLOUDINARY}${product.image}`}
          style={{ objectFit: "contain", borderRadius: "5px" }}
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

      <Typography textAlign={"left"} variant={matches ? "h5" : "h4"} mt={2}>
        {product.name}
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "h6" : "h5"}>
        {product.Brands.name}
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "caption" : "h6"}>
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
