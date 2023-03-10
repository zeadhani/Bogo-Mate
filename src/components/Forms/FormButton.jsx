import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

function FormButton({ children }) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box display="flex" justifyContent="end">
      <Button
        type="submit"
        variant="outlined"
        size={matches ? "medium" : "large"}
        sx={{ color: "#d3d3d3" }}
      >
        {children}
      </Button>
    </Box>
  );
}

export default FormButton;
