import { Box } from "@mui/material";
import React from "react";
import Logo from "../../Header/Logo";
import Links from "../../Header/Links";
import HeaderButtons from "../../Header/HeaderButtons";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: "32px",
        py: "13px",
        boxShadow: "0px 1px 2px #F5F5F5",
      }}
    >
      <Logo />
      <Links />
      <HeaderButtons />
    </Box>
  );
}

export default Navbar;
