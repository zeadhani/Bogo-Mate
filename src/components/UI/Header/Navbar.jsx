import { Box, useMediaQuery } from "@mui/material";
import React from "react";

import MobileHeader from "../../Header/MobileHeader/MobileHeader";
import LargeNavbar from "../../Header/LargeScreen/LargeNavbar";
import { useSelector } from "react-redux";

function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");
  const isLoggedIn = useSelector((state) => state.Auth.loggedIn);
  return (
    <>
      {isLoggedIn && (
        <>
          {!matches ? (
            <LargeNavbar />
          ) : (
            <Box overflow={"hidden"}>
              <MobileHeader />
            </Box>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;
