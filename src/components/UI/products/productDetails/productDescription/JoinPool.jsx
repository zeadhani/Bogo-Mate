import { Box, Button } from "@mui/material";
import React from "react";

function JoinPool() {
  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        sx={{ mt: 2 }}
      >
        Join pool
      </Button>
    </Box>
  );
}

export default JoinPool;
