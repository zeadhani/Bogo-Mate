import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

function CustomContainer({ children, nav }) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box paddingX={2} maxWidth={"lg"} mx={"auto"} sx={{ overflowX: "hidden" }}>
      {!matches && <Navigation nav={nav} />}
      {children}
    </Box>
  );
}

export default CustomContainer;
