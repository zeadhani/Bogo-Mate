import { DeliveryDining, SecurityUpdateGood } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const IconBox = ({ text, children }) => {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box gridColumn="span 4" display={"grid"} gap={1}>
      {children}
      <Typography
        variant={matches ? "caption" : "h4"}
        textAlign={"center"}
        mx={"auto"}
      >
        {text}
      </Typography>
    </Box>
  );
};
function MidLevelIcons() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        marginY: 2,
      }}
    >
      <IconBox text={"jkjhasdhjkas ahdasjkhdas"}>
        <DeliveryDining
          sx={{ fontSize: { xs: "40px", md: "70px" }, mx: "auto" }}
        />
      </IconBox>
      <IconBox text={"jkjhasdhjkas ahdasjkhdas"}>
        <SecurityUpdateGood
          sx={{ fontSize: { xs: "40px", md: "70px" }, mx: "auto" }}
        />
      </IconBox>
      <IconBox text={"jkjhasdhjkas ahdasjkhdas"}>
        <SecurityUpdateGood
          sx={{ fontSize: { xs: "40px", md: "70px" }, mx: "auto" }}
        />
      </IconBox>
    </Box>
  );
}

export default MidLevelIcons;
