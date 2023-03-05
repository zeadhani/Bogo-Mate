import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme";
import svg from "../../../images/AbstractPaper.svg";
function BrandItem() {
  return (
    <Box
      sx={{
        mb: "auto",
        borderRadius: "5px",
        cursor: "pointer",
        position: "relative",
        width: "100%",
        backgroundImage: `url(${svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        aspectRatio: "2/1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        textAlign={"center"}
        color={"#f4f4f4"}
        textTransform={"uppercase"}
        component={"div"}
        sx={{ transform: "translateY(-50%)" }}
      >
        h&m
      </Typography>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
        }}
        bgcolor={colors.grey[200]}
        color={"white"}
        paddingY={1}
      >
        10 OFFERS
      </Typography>
    </Box>
  );
}

export default BrandItem;
