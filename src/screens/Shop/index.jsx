import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Brands from "../../components/UI/brands/brands";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import ShopContainer from "./shopContainer";
import useBrandsData from "../../hooks/brands/useBrandsData";

function ShopPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    handleFilterPrefChange,
    isError,
    isLoading,
    preferencesFilter,
    resetBrandFilters,
    state,
  } = useBrandsData();

  const BrandsContainer = ({ brands }) => {
    return (
      <>
        <Grid item xs={12} md={9}>
          <Brands matches={matches} brands={brands} />
          <Box display={"flex"} justifyContent={"center"}>
            <Pagination
              size={matches ? "small" : "medium"}
              count={10}
              sx={{ mt: 5 }}
              color="primary"
            />
          </Box>
        </Grid>
      </>
    );
  };

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return (
      <ShopContainer>
        <Grid item xs={12}>
          <LoadingData />
        </Grid>
      </ShopContainer>
    );
  }
  return (
    <ShopContainer
      handleFilterPrefChange={handleFilterPrefChange}
      matches={matches}
      pref={state?.pref}
      preferencesFilter={preferencesFilter}
      resetBrandFilters={resetBrandFilters}
    >
      {state?.count === 0 ? (
        <Typography textAlign={"center"}>No Items Available</Typography>
      ) : (
        <BrandsContainer brands={state?.brands} />
      )}
    </ShopContainer>
  );
}
export default ShopPage;
