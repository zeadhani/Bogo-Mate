import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../../Theme";

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
        transition: "all .2s ",
        cursor:"pointer",
        "&:hover": { bgcolor: colors.grey[900], color: "#f5f5f5" },
      }}
    >
      <Typography textAlign={"center"} variant={matches ? "h6" : "h4"}>
        {item.name}
      </Typography>
    </Box>
  );
}

export default BrandItem;
