import { Box, Typography } from "@mui/material";
import React from "react";

function Links() {
  return (
    <Box sx={{ display: "flex", gap: 6  }}>
      <Typography>Home</Typography>
      <Typography>Shop</Typography>
      <Typography>About us</Typography>
    </Box>
  );
}

export default Links;
