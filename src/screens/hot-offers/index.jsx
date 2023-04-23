import React from "react";
import HotOffersContainer from "./hotOffersContainer";
import handleReverseSortChange from "../../utils/handleReverseSortChange";
import CustomFetchItems from "../../components/UI/Global/CustomFetchItems";
import ProductItems from "../../components/UI/products/ProductItems";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import useHotOffers from "../../hooks/products/useHotOffers";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
const stockArray = [{ name: "inStock" }, { name: "outStock" }];
function HotOffersPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    filteredStock,
    handleChangePage,
    handleFilterStockChange,
    handleSearchChange,
    handleSortChange,
    isError,
    isLoading,
    orderBy,
    page,
    resetCommonFilters,
    resetProductFilters,
    rowsPerPage,
    search,
    sort,
    state,
  } = useHotOffers();

  const resetFilters = () => {
    resetProductFilters();
    resetCommonFilters();
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return (
      <HotOffersContainer>
        <Grid item xs={12}>
          <LoadingData />
        </Grid>
      </HotOffersContainer>
    );
  }
  return (
    <HotOffersContainer
      matches={matches}
      handleFilteredItemChange={handleSortChange}
      filteredItem={handleReverseSortChange({ order: orderBy, sort })()}
      handleSearchChange={handleSearchChange}
      resetFilters={resetFilters}
      search={search}
      stockArray={stockArray}
      filteredStock={filteredStock}
      handleFilterStockChange={handleFilterStockChange}
    >
      <CustomFetchItems
        count={state?.count}
        handleChangePage={handleChangePage}
        matches={matches}
        page={page}
        rowsPerPage={rowsPerPage}
        model={state?.products}
      >
        <ProductItems matches={matches} products={state?.products} />
      </CustomFetchItems>
    </HotOffersContainer>
  );
}

export default HotOffersPage;
