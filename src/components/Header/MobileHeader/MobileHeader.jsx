import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme";

import SearchHeader from "./SearchHeader";
import MobileMenu from "./MobileMenu";
function MobileHeader() {
  return (
    <Box
      bgcolor={colors.grey[900]}
      sx={{
        height: "150px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
      px={1}
    >
      <SearchHeader />
      <MobileMenu />
    </Box>
  );
}

export default MobileHeader;
