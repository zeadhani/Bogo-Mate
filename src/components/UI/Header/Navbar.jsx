import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Logo from "../../Header/Logo";
import Links from "../../Header/Links";
import HeaderButtons from "../../Header/HeaderButtons";
import MobileHeader from "../../Header/MobileHeader/MobileHeader";

function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <>
      {!matches ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: "32px",
            py: "13px",
            boxShadow: "0px 1px 2px #221",
          }}
        >
          <Logo />

          <Links />
          <HeaderButtons />
        </Box>
      ) : (
        <Box overflow={"hidden"}>
          <MobileHeader />
        </Box>
      )}
    </>
  );
}

export default Navbar;
