import React from "react";
import { Box } from "@mui/material";
import BrandsItems from "./BrandsItems";


function Brands({ matches, brands }) {
  return (
    <Box ml={matches ? 0 : 2}>
      <BrandsItems brands={brands} />
    </Box>
  );
}

export default Brands;
