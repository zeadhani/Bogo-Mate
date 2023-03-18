import { Person, PersonOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

function Requests({ requestsLeft, completedRequests }) {
  return (
    <Box
      marginBottom={"auto"}
      display={"flex"}
      justifyContent={"end"}
      mt={1}
      flexWrap={"wrap"}
    >
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
  );
}

export default Requests;
