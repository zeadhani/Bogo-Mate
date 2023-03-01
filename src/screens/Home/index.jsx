import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useMediaQuery } from "@mui/material";
import Hero from "../../components/UI/home/LargeScreen/Hero";
import SmallHero from "../../components/UI/home/Mobile/SmallHero";

function HomePage() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer>
      {matches && <SmallHero />}
      {!matches && <Hero />}
    </CustomContainer>
  );
}

export default HomePage;
