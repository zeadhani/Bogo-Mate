import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useMediaQuery } from "@mui/material";
import Hero from "../../components/UI/home/LargeScreen/Hero";
import SmallHero from "../../components/UI/home/Mobile/SmallHero";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
import BrandsCarousel from "../../components/UI/home/Global/BrandsCarousel";
import MidLevelIcons from "../../components/UI/home/Global/midLevelIcons";
import HomeAboutSection from "../../components/UI/home/Global/homeAboutSection";
import { useNavigate } from "react-router-dom";
import CategoriesHomePage from "../../components/UI/home/Global/CategoriesHomePage";
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
function HomePage() {
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <CustomContainer>
      {matches && <SmallHero />}
      {!matches && <Hero />}
      <MidLevelIcons />

      <ProductCarousel
        matches={matches}
        title={"for you"}
        products={products}
        navigate={"/about"}
      />
      <HomeAboutSection matches={matches} />
      <BrandsCarousel matches={matches} />
      <ProductCarousel
        matches={matches}
        title={"Limited offers"}
        products={products}
        navigate={"/about"}
      />
      <CategoriesHomePage matches={matches} />
    </CustomContainer>
  );
}

export default HomePage;
