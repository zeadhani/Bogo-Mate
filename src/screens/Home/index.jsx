import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useMediaQuery } from "@mui/material";
import Hero from "../../components/UI/home/LargeScreen/Hero";
import SmallHero from "../../components/UI/home/Mobile/SmallHero";
import ProductCarousel from "../../components/UI/home/Global/productCarousel";
import BrandsCarousel from "../../components/UI/home/Global/BrandsCarousel";
import HomeAboutSection from "../../components/UI/home/Global/homeAboutSection";

import CategoriesHomePage from "../../components/UI/home/Global/CategoriesHomePage";
import useHomeData from "../../hooks/home/useHomeData";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";


function HomePage() {
  const matches = useMediaQuery("(max-width:800px)");

  const { data, isLoading, error } = useHomeData();

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <LoadingData />;
  }
  return (
    <CustomContainer>
      {matches && <SmallHero  homeSliders={data?.homeSliders}/>}
      {!matches && <Hero homeSliders={data?.homeSliders}/>}
      {/* <MidLevelIcons /> */}
      <ProductCarousel
        matches={matches}
        title={"for you"}
        products={data?.userProducts}
        navigate={"/shop"}
      />
      <HomeAboutSection matches={matches} />
      <BrandsCarousel matches={matches} Brands={data?.topTenBrands} />
      <ProductCarousel
        matches={matches}
        title={"Hot Offers"}
        products={data?.oneRemaining}
        navigate={"/hot-offers"}
      />
      <CategoriesHomePage categories={data?.categories} matches={matches} />
    </CustomContainer>
  );
}

export default HomePage;
