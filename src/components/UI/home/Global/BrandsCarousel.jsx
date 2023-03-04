import { Box, Typography } from "@mui/material";
import React from "react";
import BrandItem from "./BrandItem";
import { Link } from "react-router-dom";

const Brands = [
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
function BrandsCarousel({ matches }) {
  return (
    <Box my={3}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography
          variant={matches ? "h6" : "h4"}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          Top Brands
        </Typography>
        <Typography
          variant={matches ? "caption" : "h6"}
          fontWeight={700}
          textTransform={"uppercase"}
          // color={"#f5f5f5"}
        >
          <Link to="/about" style={{ color: "#222" }}>
            see more &rarr;
          </Link>
        </Typography>
      </Box>
      <Box
        my={1}
        gap={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Brands.map((item) => (
          <BrandItem key={item.id} item={item} matches={matches} />
        ))}
      </Box>
    </Box>
  );
}

export default BrandsCarousel;
