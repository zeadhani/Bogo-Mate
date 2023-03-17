import { Box } from "@mui/material";
import React from "react";

import ProductItems from "./ProductItems";

function Products({ matches, products }) {
  return (
    <Box ml={matches ? 0 : 2}>
      <ProductItems products={products} />
    </Box>
  );
}

export default Products;
