import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

function FormButton({ children ,action,disabled}) {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box display="flex" justifyContent="end">
      <Button
        type="submit"
        size={matches ? "medium" : "large"}
        fullWidth
        variant="contained"
        // color="primary"
        sx={{color:"#f5f5f5",bgcolor:"#222"}}
        onClick={action}
        disabled={disabled}
      >
        {children}
      </Button>
    </Box>
  );
}

export default FormButton;
