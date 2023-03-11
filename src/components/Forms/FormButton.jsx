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
      >
        {children}
      </Button>
    </Box>
  );
}

export default FormButton;
