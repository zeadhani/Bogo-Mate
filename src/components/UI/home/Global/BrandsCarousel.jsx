import { Box, Typography } from "@mui/material";
import React from "react";
import BrandItem from "./BrandItem";
import { Link } from "react-router-dom";

function BrandsCarousel({ Brands, matches }) {
  return (
    <Box my={3}>
      <Box display={"flex"} justifyContent={"space-between"}>
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
          <Link to="/shop" style={{ color: "#222" }}>
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
        {Brands?.map((item) => (
          <BrandItem key={item.name} item={item} matches={matches} />
        ))}
      </Box>
    </Box>
  );
}

export default BrandsCarousel;
