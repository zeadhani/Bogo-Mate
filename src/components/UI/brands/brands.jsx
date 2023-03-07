import React from "react";
import BrandsHeader from "./Header";
import { Box, Grid } from "@mui/material";
import BrandsItems from "./BrandsItems";
import FilterList from "./Fliter";

const brandsItems = [
  { id: 1, name: "Brand 1" },
  { id: 2, name: "Brand 2" },
  { id: 3, name: "Brand 3" },
  { id: 4, name: "Brand 4" },
  { id: 5, name: "Brand 5" },
  { id: 6, name: "Brand 6" },
  { id: 7, name: "Brand 7" },
  { id: 8, name: "Brand 8" },
  { id: 9, name: "Brand 9" },
  { id: 10, name: "Brand 10" },
];
function Brands({ matches }) {
  return (
    <Box ml={matches?0:2}>
      <BrandsHeader matches={matches}/>
      {matches && <FilterList matches={matches} />}
      <BrandsItems brands={brandsItems} />
    </Box>
  );
}

export default Brands;
