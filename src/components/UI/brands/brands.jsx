import React from "react";
import { Box } from "@mui/material";
import BrandsItems from "./BrandsItems";
import FilterList from "./Fliter";
import HeaderImage from "../Global/Header";

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
    <Box ml={matches ? 0 : 2}>
      <HeaderImage
        matches={matches}
        image={
          "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
        }
      />
      {matches && <FilterList matches={matches} />}
      <BrandsItems brands={brandsItems} />
    </Box>
  );
}

export default Brands;
