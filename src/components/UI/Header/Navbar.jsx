import { Box, useMediaQuery } from "@mui/material";
import React from "react";

import MobileHeader from "../../Header/MobileHeader/MobileHeader";
import LargeNavbar from "../../Header/LargeScreen/LargeNavbar";

function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <>
      {!matches ? (
        <LargeNavbar />
      ) : (
        <Box overflow={"hidden"}>
          <MobileHeader />
        </Box>
      )}
    </>
  );
}

export default Navbar;
