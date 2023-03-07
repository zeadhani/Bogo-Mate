import { Box, Grid, Pagination, useMediaQuery } from "@mui/material";
import React from "react";

import Brands from "../../components/UI/brands/brands";
import FilterList from "../../components/UI/brands/Fliter";
import CustomContainer from "../../components/UI/Global/CustomContainer";

function ShopPage() {
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <CustomContainer nav={"/shop"}>
      <Grid container spacing={2} mb={4}>
        {!matches && (
          <Grid item xs={3}>
            <FilterList matches={matches} />
          </Grid>
        )}

        <Grid item xs={matches ? 12 : 9}>
          <Brands matches={matches} />
          <Box display={"flex"} justifyContent={"center"}>
            <Pagination count={10} sx={{ mt: 5 }} color="primary" />
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ShopPage;
