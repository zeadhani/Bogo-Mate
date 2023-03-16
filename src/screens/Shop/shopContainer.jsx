import React from "react";
import HeaderImage from "../../components/UI/Global/Header";
import { Grid } from "@mui/material";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import FilterList from "../../components/UI/brands/Fliter";

function ShopContainer({ children ,matches,pref,resetBrandFilters,preferencesFilter,handleFilterPrefChange }) {
  return (
    <CustomContainer nav={"/shop"}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FilterList
            matches={matches}
            preferences={pref}
            resetBrandFilters={resetBrandFilters}
            preferencesFilter={preferencesFilter}
            handleFilterPrefChange={handleFilterPrefChange}
          />
        </Grid>
        {children}
      </Grid>
    </CustomContainer>
  );
}

export default ShopContainer;
