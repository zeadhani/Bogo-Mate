import { Box, Typography } from "@mui/material";
import ProductItem from "../../Global/ProductItem";
import { color, motion } from "framer-motion";
import { colors } from "../../../../Theme";
import svg from "../../../../images/AbstractPaper.svg";
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
  { id: 7, name: "Product 7" },
  { id: 8, name: "Product 8" },
  { id: 9, name: "Product 9" },
  { id: 10, name: "Product 10" },
];

const ProductCarousel = ({ matches }) => {
  return (
    <Box
      bgcolor={colors.grey[900]}
      padding={2}
      sx={{ borderRadius: "4px", backgroundImage: `url(${svg})`, marginY: 3 }}
    >
      <Typography
        variant={matches ? "h6" : "h4"}
        fontWeight={700}
        textTransform={"uppercase"}
        color={"#f5f5f5"}
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
