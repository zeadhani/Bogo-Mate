import { Box, CircularProgress, LinearProgress } from "@mui/material";
import React from "react";

function CustomSuspense({ children }) {
  return (
    <React.Suspense
      fallback={
        <Box sx={{ display: "flex" ,justifyContent:"center",alignItems:'center' ,height:"63vh"}}>
          <CircularProgress />
        </Box>
      }
    >
      {children}
    </React.Suspense>
  );
}

export default CustomSuspense;
