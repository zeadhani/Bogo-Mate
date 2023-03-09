import { LinearProgress } from "@mui/material";
import React from "react";

function CustomSuspense({ children }) {
  return (
    <React.Suspense fallback={<LinearProgress color="inherit" />}>
      {children}
    </React.Suspense>
  );
}

export default CustomSuspense;
