import { Box, Button } from "@mui/material";
import React from "react";

function JoinPool({ count }) {
  return (
    <Box p={2}>
      <Button
        variant="contained"
        color={count ? "success" : "error"}
        size="large"
        fullWidth
        sx={{ mt: 2 }}
      >
        {Boolean(count) ? "Join pool" : "Pool Closed"}
      </Button>
    </Box>
  );
}

export default JoinPool;
