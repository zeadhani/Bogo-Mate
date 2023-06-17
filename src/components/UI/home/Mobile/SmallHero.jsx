import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

function SmallHero({ homeSliders }) {
  return (
    <>
      <Typography variant="h6" fontWeight={700} textTransform={"uppercase"}>
        Bogo Mate
      </Typography>
      <Box
        overflow={"scroll"}
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel homeSliders={homeSliders} />
      </Box>
    </>
  );
}

export default SmallHero;
