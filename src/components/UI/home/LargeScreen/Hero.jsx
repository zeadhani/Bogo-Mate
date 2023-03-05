import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Hero() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "10px",
        py: 2,
      }}
    >
      <Box
        gridColumn="span 12"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="embla__slide__img"
          src={
            "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
          }
          alt="Your alt text"
          style={{objectFit:'cover',maxHeight:"300px"}}
        />
      </Box>
      <Box
        gridColumn="span 6"
        component={motion.div}
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="embla__slide__img"
          src={
            "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
          }
          alt="Your alt text"
        />
      </Box>
      <Box
        gridColumn="span 6"
        component={motion.div}
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="embla__slide__img"
          src={
            "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
          }
          alt="Your alt text"
        />
      </Box>
    </Box>
  );
}

export default Hero;
