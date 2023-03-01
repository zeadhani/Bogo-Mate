import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

function SmallHero() {
  return (
    <>
      <Typography variant="h6" fontWeight={700} textTransform={"uppercase"}>
        Bogo Mate
      </Typography>
      <Box overflow={"scroll"}>
        <Carousel />
      </Box>
    </>
  );
}

export default SmallHero;
