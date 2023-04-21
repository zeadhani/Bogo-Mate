import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme";

import { createSearchParams, useNavigate } from "react-router-dom";
function BrandItem({ brand }) {
  const navigate = useNavigate();
  const handleBrandNavigation = () => {
    const params = {
      rowsPerPage: 10,
      page: 0,
      sort: "createdAt",
      orderBy: "asc",
      search: "",
      stock: "",
      brand: [brand.name],
      filtered: [],
      gender: "",
    };
    navigate({
      pathname: `/shop/${brand.name}`,
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <>
      <Box
        sx={{
          mb: "auto",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          cursor: "pointer",
          width: "100%",
          backgroundImage: `url('${process.env.REACT_APP_CLOUDINARY}${brand.image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          aspectRatio: "2/1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center",
        }}
        onClick={handleBrandNavigation}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
        bgcolor={colors.grey[200]}
        color={"white"}
        paddingY={1}
        textTransform={"uppercase"}
      >
        {brand.name} - {brand._count.offers} OFFERS
      </Typography>
    </>
  );
}

export default BrandItem;
