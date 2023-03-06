/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function BrandsHeader() {
  return (
    <Box component={motion.div} mb={2} animate={{opacity:[0,1]}} transition={{duration:0.4 }}>
      <img
        src="https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
        style={{
          objectFit: "cover",
          borderRadius: "5px",
          width: "100%",
          maxHeight: "250px",
        }}
      />
    </Box>
  );
}

export default BrandsHeader;
