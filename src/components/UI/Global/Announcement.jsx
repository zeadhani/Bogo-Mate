import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

function Announcement() {
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide((prev) => !prev);
  };
  return (
    <Box
      sx={{
        display: hide ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "4px",
      }}
    >
      <Typography textAlign={"center"} textTransform={"uppercase"}>
        Bogo is here for you!
      </Typography>

      <IconButton sx={{ position: "absolute", right: 0 }} onClick={handleHide}>
        <Close />
      </IconButton>
    </Box>
  );
}

export default Announcement;
