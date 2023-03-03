import { Box, Typography } from "@mui/material";
import React from "react";

function BrandItem({ item, matches }) {
  return (
    <Box
      sx={{
        paddingX: 3,
        paddingY: 1,
        borderRadius: "5px",
        border: "1px solid rgba(34,34,34,0.4)",
        flexShrink: 0,
        minWidth: !matches && "200px",
      }}
    >
      <Typography textAlign={"center"} variant={matches ? "h6" : "h4"}>
        {item.name}
      </Typography>
    </Box>
  );
}

export default BrandItem;
