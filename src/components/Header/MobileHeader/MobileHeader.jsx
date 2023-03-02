import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme";

import SearchHeader from "./SearchHeader";
import MobileMenu from "./MobileMenu";

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
        bgcolor={colors.grey[900]}
        sx={{
          height: "150px",
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: 0,
        }}
      />
      <SearchHeader />
      <MobileMenu />
    </Box>
  );
}

export default MobileHeader;
