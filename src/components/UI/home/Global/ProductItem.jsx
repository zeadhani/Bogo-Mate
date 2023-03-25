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
        }}
      >
        <LazyLoadImage
          style={{ objectFit: "contain", borderRadius: "5px" }}
          width={"100%"}
          alt={"productImage"}
          src={`${process.env.REACT_APP_CLOUDINARY}${product.image}`}
        />
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
