import { Box, Divider, Typography } from "@mui/material";
import React from "react";

import { Person, PersonOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductItem({ product, matches }) {
  const navigate = useNavigate();
  const completedRequests =
    product.offers._count.requests % product.offers.total_people_quantity;
  const requestsLeft = product.offers.total_people_quantity - completedRequests;
  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <Box
      sx={{
        borderRadius: "5px",
        paddingX: 2,
        paddingY: 1,
        cursor: "pointer",
      }}
      bgcolor={"#f5f5f5"}
      onClick={handleNavigate}
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
      <Box
        marginBottom={"auto"}
        display={"flex"}
        justifyContent={"end"}
        mt={1}
        flexWrap={"wrap"}
      >
        {Array(requestsLeft)
          .fill(0)
          .map((item, index) => (
            <PersonOutline key={index} />
          ))}
        {Array(completedRequests)
          .fill(0)
          .map((item, index) => (
            <Person key={index} />
          ))}
      </Box>
    </Box>
  );
}

export default ProductItem;
