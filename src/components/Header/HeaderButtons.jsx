import {  PersonOutline } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

function HeaderButtons() {
  return (
    <Box sx={{ alignSelf: "center", display: "flex", gap: 3 }}>
      <Button variant="outlined">Login</Button>
      <Button>Logout</Button>
      <PersonOutline sx={{ alignSelf: "center" }} />
    </Box>
  );
}

export default HeaderButtons;
