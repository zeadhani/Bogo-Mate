import { Box } from "@mui/material";
import React from "react";
import SearchHeader from "./SearchHeader";
import MobileMenu from "./MobileMenu";
import svg from "../../../images/AbstractPaper.svg";
import { BackGorundimage } from "../../../images/image";
function MobileHeader() {
  return (
    <Box
      sx={{
        height: "100%",
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
          zIndex: 0,
          backgroundImage: BackGorundimage,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }}
      />
      <SearchHeader />
      <MobileMenu />
    </Box>
  );
}

export default MobileHeader;
