import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

function PrefItem({ item, addItem, checked }) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box
      sx={{
        paddingX: 3,
        paddingY: 1,
        borderRadius: "5px",
        border: "1px solid #141b2d",
        flexShrink: 0,
        minWidth: !matches && "200px",
        transition: "all .2s ",
        cursor: "pointer",
        "&:hover": { bgcolor: "#141b2d", color: "#f5f5f5" },
        bgcolor: checked ? "#141b2d" : "transparent",
        color:checked?"#f5f5f5":"black"
      }}
      onClick={addItem(item.name)}
    >
      <Typography textAlign={"center"} variant={matches ? "h6" : "h4"}>
        {item.name}
      </Typography>
    </Box>
  );
}

export default PrefItem;
