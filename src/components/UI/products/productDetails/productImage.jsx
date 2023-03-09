import { Box } from "@mui/material";
import React from "react";

function ProductImage({image}) {
  return (
    <Box
      p={2}
      sx={{
        height: {
          xs: "200px",
          md: "250px",
          lg: "300px",
        },
      }}
    >
      <img
        src={image}
        alt="Product"
        width={"100%"}
        style={{
          objectFit: "contain",
          borderRadius: "5px",
          height: "100%",
        }}
      />
    </Box>
  );
}

export default ProductImage;
