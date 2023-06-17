import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Hero({ homeSliders }) {
  const navigate = useNavigate();
  return (
    <>
      {homeSliders && (
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
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "25%",
                textAlign: "center",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                sx={{
                  color: "#f5f5f5f5",
                  textTransform: "uppercase",
                  fontSize: "65px",
                }}
                variant="h1"
              >
                {homeSliders[0]?.title}
              </Typography>
              <Typography sx={{ color: "#f5f5f5f5" }} variant="h1">
                {homeSliders[0]?.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: "10px", backgroundColor: "#222" }}
                onClick={() => navigate("/shop/" + homeSliders[0]?.link)}
              >
                Shop Now
              </Button>
            </Box>
            <img
              className="embla__slide__img"
              src={process.env.REACT_APP_CLOUDINARY + homeSliders[0].image}
              alt="Your alt text"
              style={{ objectFit: "cover", maxHeight: "300px" }}
            />
          </Box>
          <Box
            gridColumn="span 6"
            component={motion.div}
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5 }}
            sx={{
              background: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(30, 30, 30, 0.8)), url(${
                process.env.REACT_APP_CLOUDINARY + homeSliders[1].image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
              padding: "1rem",
              height: "200px",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#f5f5f5f5",
                  textTransform: "uppercase",
                }}
                variant="h1"
              >
                {homeSliders[1]?.title}
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: "10px",
                  backgroundColor: "transparent",
                  color: "#f5f5f5",
                  border: "1px solid #f5f5f5f5",
                }}
                onClick={() => navigate("/shop/" + homeSliders[1]?.link)}
              >
                Discover!
              </Button>
            </Box>
          </Box>
          <Box
            gridColumn="span 6"
            component={motion.div}
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.5 }}
            sx={{
              background: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(30, 30, 30, 0.8)), url(${
                process.env.REACT_APP_CLOUDINARY + homeSliders[2].image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#f5f5f5f5",
                  textTransform: "uppercase",
                }}
                variant="h1"
              >
                {homeSliders[2]?.title}
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: "10px",
                  backgroundColor: "transparent",
                  color: "#f5f5f5",
                  border: "1px solid #f5f5f5f5",
                }}
                onClick={() => navigate("/shop/" + homeSliders[2]?.link)}
              >
                Hit The Gym!
              </Button>
            </Box>
            {/* <img
              className="embla__slide__img"
              src={process.env.REACT_APP_CLOUDINARY + homeSliders[2].image}
              alt="Your alt text"
              style={{ objectFit: "cover", maxHeight: "250px" }}
            /> */}
          </Box>
        </Box>
      )}
    </>
  );
}

export default Hero;
