import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

function FormButton({ children ,action}) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box display="flex" justifyContent="end">
      <Button
        type="submit"
        size={matches ? "medium" : "large"}
        fullWidth
        variant="contained"
        color="primary"
        onClick={action}
      >
        {children}
      </Button>
    </Box>
  );
}

export default FormButton;
