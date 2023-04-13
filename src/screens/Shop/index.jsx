import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import ShopContainer from "./shopContainer";
import useBrandsData from "../../hooks/brands/useBrandsData";
import handleReverseSortChange from "../../utils/handleReverseSortChange";
import BrandsItems from "../../components/UI/brands/BrandsItems";

import CustomFetchItems from "../../components/UI/Global/CustomFetchItems";

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
    handleSortChange,
    orderBy,
    sort,
    resetCommonFilters,
    handleSearchChange,
    search,
    rowsPerPage,
    page,
    handleChangePage,
  } = useBrandsData();

  const resetFilters = () => {
    resetBrandFilters();
    resetCommonFilters();
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
      filteredItem={handleReverseSortChange({ order: orderBy, sort })()}
      handleFilteredItemChange={handleSortChange}
      resetFilters={resetFilters}
      search={search}
      handleSearchChange={handleSearchChange}
    >
      <CustomFetchItems
        count={state?.count}
        handleChangePage={handleChangePage}
        matches={matches}
        page={page}
        rowsPerPage={rowsPerPage}
        model={state?.brands}
      >
        <BrandsItems matches={matches} brands={state?.brands} />
      </CustomFetchItems>
    </ShopContainer>
  );
}
export default ShopPage;
