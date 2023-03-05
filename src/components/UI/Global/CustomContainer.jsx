import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function CustomContainer({ children }) {
  const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box paddingX={2} maxWidth={"xl"} mx={"auto"} sx={{ overflowX: "hidden" }}>
      {!matches && <Navigation pathname={pathname} />}
      {children}
    </Box>
  );
}

export default CustomContainer;
