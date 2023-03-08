import { Box } from "@mui/material";
import React from "react";
import HeaderImage from "../Global/Header";
import ProductsFilter from "./ProductsFilter";
import ProductItems from "./ProductItems";

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" },
  { id: 5, name: "product 5" },
  { id: 6, name: "product 6" },
  { id: 7, name: "product 7" },
  { id: 8, name: "product 8" },
  { id: 9, name: "product 9" },
  { id: 10, name: "product 10" },
];
function Products({ matches }) {
  return (
    <Box ml={matches ? 0 : 2}>
      <HeaderImage
        matches={matches}
        image={
          "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
        }
      />
      {matches && <ProductsFilter matches={matches} />}
      <ProductItems products={products}/>
    </Box>
  );
}

export default Products;
