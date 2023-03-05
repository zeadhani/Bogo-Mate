import { Grid, useMediaQuery } from "@mui/material";
import React from "react";

import Brands from "../../components/UI/brands/brands";
import FilterList from "../../components/UI/brands/Fliter";
import CustomContainer from "../../components/UI/Global/CustomContainer";

function ShopPage() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer>
      <Grid container spacing={2} mb={4}>
        {!matches && (
          <Grid item xs={3}>
            <FilterList />
          </Grid>
        )}
        <Grid item xs={matches ? 12 : 9}>
          <Brands />
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ShopPage;
