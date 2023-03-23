import { Box, Button } from "@mui/material";
import React from "react";

function JoinPool({ count, hasAttributes, attributeInStock,handleJoinPoll }) {


  if (Boolean(hasAttributes)) {
    let data = { color: "", text: "" };
    if (attributeInStock === "inStock") {
      data.color = "success";
      data.text = "Join pool";
    } else if (attributeInStock === "outStock") {
      data.color = "error";
      data.text = "Pool Closed";
    } else {
      data.color = "info";
      data.text = "Choose your product Details";
    }
    return (
      <Box p={2}>
        <Button
          variant="contained"
          color={data.color}
          size="large"
          fullWidth
          onClick={handleJoinPoll(data.text)}
        >
          {data.text}
        </Button>
      </Box>
    );
  }
  return (
    <Box p={2}>
      <Button
        variant="contained"
        color={count ? "success" : "error"}
        size="large"
        fullWidth
        onClick={handleJoinPoll(Boolean(count) ? "Join pool" : "Pool Closed")}
      >
        {Boolean(count) ? "Join pool" : "Pool Closed"}
      </Button>
    </Box>
  );
}

export default JoinPool;
