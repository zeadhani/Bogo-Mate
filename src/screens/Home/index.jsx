import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useMediaQuery } from "@mui/material";
import Hero from "../../components/UI/home/LargeScreen/Hero";
import SmallHero from "../../components/UI/home/Mobile/SmallHero";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
import BrandsCarousel from "../../components/UI/home/Global/BrandsCarousel";
import MidLevelIcons from "../../components/UI/home/Global/midLevelIcons";
 import HomeAboutSection from "../../components/UI/home/Global/homeAboutSection";

function HomePage() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer>
      {matches && <SmallHero />}
      {!matches && <Hero />}
      {!matches && <MidLevelIcons />}
      <ProductCarousel matches={matches} />
      <BrandsCarousel matches={matches} />
      <HomeAboutSection matches={matches}/>
      {matches && <MidLevelIcons />}
    </CustomContainer>
  );
}

export default HomePage;
