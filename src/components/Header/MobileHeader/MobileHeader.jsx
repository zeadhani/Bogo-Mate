import { Box } from "@mui/material";
import React from "react";
import SearchHeader from "./SearchHeader";
import MobileMenu from "./MobileMenu";
import svg from "../../../images/AbstractPaper.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function MobileHeader() {
  const [currentPath, setCurrentPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname.split("/")[1] === "profile");
  }, [location.pathname]);
  return (
    <>
      {!currentPath && (
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          px={1}
          pb={2}
        >
          <Box
            sx={{
              height: "150px",
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              backgroundImage: `url(${svg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <SearchHeader />
          <MobileMenu />
        </Box>
      )}
    </>
  );
}

export default MobileHeader;
