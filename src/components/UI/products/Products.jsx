import { Box } from "@mui/material";
import React from "react";
import HeaderImage from "../Global/Header";

function Products({ matches }) {
  return (
    <Box ml={matches ? 0 : 2}>
      <HeaderImage
        matches={matches}
        image={
          "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
        }
      />
    </Box>
  );
}

export default Products;
