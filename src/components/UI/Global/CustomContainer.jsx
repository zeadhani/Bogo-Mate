import { Box } from "@mui/material";
import React from "react";

function CustomContainer({ children }) {
  return (
    <Box paddingX={2} maxWidth={"1300px"} mx={"auto"}>
      {children}
    </Box>
  );
}

export default CustomContainer;
