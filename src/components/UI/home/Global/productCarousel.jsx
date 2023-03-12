import { Box, IconButton, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { colors } from "../../../../Theme";
import svg from "../../../../images/image1.svg";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
const ProductCarousel = ({
  matches,
  title,
  products,
  navigate,
  productDetails,
}) => {
  const containerRef = useRef(null);
  function handleScrollLeft() {
    containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  }
  function handleScrollRight() {
    containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  }

  return (
    <>
      {products?.length > 0 && (
        <Box
          bgcolor={colors.grey[900]}
          padding={2}
          sx={{
            borderRadius: "4px",
            backgroundImage: `url(${svg})`,
            marginY: 3,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            paddingX: matches ? "" : "4rem",
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              variant={matches ? "h6" : "h4"}
              fontWeight={700}
              textTransform={"uppercase"}
              color={"#f5f5f5"}
            >
              {title}
            </Typography>
            {navigate && (
              <Typography
                variant={matches ? "caption" : "h6"}
                fontWeight={700}
                textTransform={"uppercase"}
              >
                <Link to={navigate} style={{ color: "white" }}>
                  see more &rarr;
                </Link>
              </Typography>
            )}
          </Box>
          <Box
            mt={1}
            display={"flex"}
            justifyContent={"start"}
            component={motion.div}
            initial={!productDetails ? { x: "50%" } : { opacity: 0.5 }}
            whileInView={!productDetails ? { x: "0%" } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                overflow: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                gap: { xs: 1, sm: 2, md: 3 },
                pb: 1,
                scrollPadding: "0 2px",
                "& > *": {
                  scrollSnapAlign: "center",
                },
                "&::-webkit-scrollbar": {
                  height: "2px",
                  backgroundColor: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              ref={containerRef}
            >
              {products?.map((product) => (
                <ProductItem
                  product={product}
                  key={product.name}
                  matches={matches}
                />
              ))}
            </Box>
          </Box>

          {!matches && (
            <>
              <IconButton
                onClick={handleScrollLeft}
                sx={{ position: "absolute", top: "10%", left: 0 }}
              >
                <KeyboardArrowLeft
                  sx={{ fontSize: "3rem", color: "#f5f5f5" }}
                />
              </IconButton>
              <IconButton
                onClick={handleScrollRight}
                sx={{ position: "absolute", top: "50%", right: 0 }}
              >
                <KeyboardArrowRight
                  sx={{ fontSize: "3rem", color: "#f5f5f5" }}
                />
              </IconButton>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductCarousel;
