import { Person, Person2Outlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Requests() {
  return (
    <Box mt={4} display={"flex"} gap={4}>
      <Box display={"flex"} gap={0.5}>
        <Person2Outlined />
        <Person2Outlined />
        <Person />
        <Person />
        <Person />
      </Box>
      <Typography variant="caption" fontWeight={900} alignSelf={"center"}>
        2 left
      </Typography>
    </Box>
  );
}

export default Requests;
