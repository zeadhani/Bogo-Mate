import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../../Theme";
import { createSearchParams, useNavigate } from "react-router-dom";

function BrandItem({ item, matches }) {
  const navigate = useNavigate();
  const handleBrandNavigation = () => {
    const params = {
      rowsPerPage: 10,
      page: 0,
      sort: "createdAt",
      orderBy: "asc",
      search: "",
      stock: "",
      brand: [item.name],
      filtered: [],
      gender: "",
    };
    navigate({
      pathname: `/shop/${item.name}`,
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <Box
      sx={{
        paddingX: 3,
        paddingY: 1,
        borderRadius: "5px",
        border: "1px solid rgba(34,34,34,0.4)",
        flexShrink: 0,
        minWidth: !matches && "200px",
        transition: "all .2s ",
        cursor: "pointer",
        "&:hover": { bgcolor: colors.grey[900], color: "#f5f5f5" },
      }}
      onClick={handleBrandNavigation}
    >
      <Typography textAlign={"center"} variant={matches ? "h6" : "h4"}>
        {item.name}
      </Typography>
    </Box>
  );
}

export default BrandItem;
