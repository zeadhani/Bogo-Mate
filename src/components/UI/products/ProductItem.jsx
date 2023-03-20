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
      <LazyLoadImage
        alt="images"
        width={"100%"}
        src={`${process.env.REACT_APP_CLOUDINARY}${product.image}`}
        style={{ objectFit: "contain", borderRadius: "5px" }}
      />

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
