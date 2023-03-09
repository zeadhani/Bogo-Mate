import { Person, PersonOutline } from "@mui/icons-material";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const matches = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const handleNavigate = (brand, item) => () => {
    navigate(`/shop/${brand}/${item}`);
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
      onClick={handleNavigate(product.brand, product.name)}
    >
      <Box
        sx={{
          mb: "auto",
          mx: "auto",
        }}
      >
        <img
          alt="images"
          src="https://res.cloudinary.com/df2862din/image/upload/v1677278946/xgagzhtq8odcsryuuaoj.png"
          width={"100%"}
          style={{ objectFit: "contain", borderRadius: "5px" }}
        />
      </Box>
      <Divider />
      <Typography textAlign={"left"} variant={matches ? "h5" : "h3"} mt={2}>
        {product.name}
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "h6" : "h4"}>
        Nike
      </Typography>
      <Typography textAlign={"left"} variant={matches ? "caption" : "h5"}>
        350EGP
      </Typography>
      <Box
        marginBottom={"auto"}
        display={"flex"}
        justifyContent={"end"}
        mt={1}
        flexWrap={"wrap"}
      >
        <PersonOutline />
        <PersonOutline />
        <Person />
        <Person />
        <Person />
      </Box>
    </Box>
  );
}

export default ProductItem;
