import { Person, PersonOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Requests({ requestsLeft, completedRequests }) {
  return (
    <Box display={"flex"} gap={4}>
      <Box display={"flex"} gap={0.5}>
        {Array(requestsLeft)
          .fill(0)
          .map((item, index) => (
            <PersonOutline key={index} />
          ))}
        {Array(completedRequests)
          .fill(0)
          .map((item, index) => (
            <Person key={index} />
          ))}
      </Box>
      <Typography variant="body2" fontWeight={900} alignSelf={"center"}>
        {requestsLeft} left
      </Typography>
    </Box>
  );
}

export default Requests;
