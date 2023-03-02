import { Box } from "@mui/material";
import React from "react";

function CustomContainer({ children }) {
  return (
    <Box paddingX={2} maxWidth={"1350px"} mx={"auto"} sx={{overflowX:"hidden"}}>
      {children}
    </Box>
  );
}

export default CustomContainer;
