import { Box, Typography } from "@mui/material";
import ProductItem from "../../Global/ProductItem";
import { motion } from "framer-motion";
// import svg from "../../../../images/AbstractPaper.svg"
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const ProductCarousel = ({ matches }) => {
  return (
    <>
      <Typography
        variant={matches ? "h6" : "h4"}
        fontWeight={700}
        textTransform={"uppercase"}
      >
        for you
      </Typography>
      <Box
        mt={1}
        display={"flex"}
        justifyContent={"start"}
        component={motion.div}
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ repeat: false, duration: 0.8 }}
      >
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            gap: { xs: 1, sm: 2, md: 3 },
            pb: 2,
            scrollPadding: "0 2px",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "&::-webkit-scrollbar": {
              height: "2px",
            },
          }}
        >
          {products.map((product) => (
            <ProductItem product={product} key={product.id} matches={matches} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductCarousel;
