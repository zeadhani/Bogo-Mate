import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

function FormButton({ children }) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box display="flex" justifyContent="end">
      <Button
        type="submit"
        size={matches ? "medium" : "large"}
        fullWidth
        variant="contained"
        color="primary"
      >
        {children}
      </Button>
    </Box>
  );
}

export default FormButton;
