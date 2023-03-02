import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Typography, useMediaQuery } from "@mui/material";
import Hero from "../../components/UI/home/LargeScreen/Hero";
import SmallHero from "../../components/UI/home/Mobile/SmallHero";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";

function HomePage() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer>
      {matches && <SmallHero />}
      {!matches && <Hero />}

      <ProductCarousel matches={matches} />
    </CustomContainer>
  );
}

export default HomePage;
