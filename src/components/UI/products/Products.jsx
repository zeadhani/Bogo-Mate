import { Box } from "@mui/material";
import React from "react";

import ProductItems from "./ProductItems";

const products = [
  { id: 1, name: "product 1", brand: "H&M" },
  { id: 2, name: "product 2", brand: "H&M" },
  { id: 3, name: "product 3", brand: "H&M" },
  { id: 4, name: "product 4", brand: "H&M" },
  { id: 5, name: "product 5", brand: "H&M" },
  { id: 6, name: "product 6", brand: "H&M" },
  { id: 7, name: "product 7", brand: "H&M" },
  { id: 8, name: "product 8", brand: "H&M" },
  { id: 9, name: "product 9", brand: "H&M" },
  { id: 10, name: "product 10", brand: "H&M" },
];
function Products({ matches }) {
  return (
    <Box ml={matches ? 0 : 2}>
      <ProductItems products={products} />
    </Box>
  );
}

export default Products;
