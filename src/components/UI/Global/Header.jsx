/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function HeaderImage({ image }) {
  return (
    <Box
      component={motion.div}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={image}
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

export default HeaderImage;
