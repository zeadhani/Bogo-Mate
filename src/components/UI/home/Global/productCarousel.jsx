import { Box, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { colors } from "../../../../Theme";
import svg from "../../../../images/image1.svg";
import { Link } from "react-router-dom";

const ProductCarousel = ({ matches, title, products, navigate }) => {
  return (
    <Box
      bgcolor={colors.grey[900]}
      padding={2}
      sx={{
        borderRadius: "4px",
        backgroundImage: `url(${svg})`,
        marginY: 3,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
        <Typography
          variant={matches ? "caption" : "h6"}
          fontWeight={700}
          textTransform={"uppercase"}
          // color={"#f5f5f5"}
        >
          <Link to={navigate} style={{ color: "white" }}>
            see more &rarr;
          </Link>
        </Typography>
      </Box>
      <Box
        mt={1}
        display={"flex"}
        justifyContent={"start"}
        component={motion.div}
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 0.8 }}
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
        >
          {products.map((product) => (
            <ProductItem product={product} key={product.id} matches={matches} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
