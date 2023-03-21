import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import ShopContainer from "./shopContainer";
import useBrandsData from "../../hooks/brands/useBrandsData";
import handleReverseSortChange from "../../utils/handleReverseSortChange";
import BrandsItems from "../../components/UI/brands/BrandsItems";

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
      {state?.brands?.length === 0 ? (
        <Grid item xs={matches ? 12 : 9}>
          <Typography textAlign={"center"} variant="h5">
            No Items Available
          </Typography>
        </Grid>
      ) : (
        <BrandsItems matches={matches} brands={state?.brands} />
      )}
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={matches ? "center" : "right"}>
          <Pagination
            size={matches ? "small" : "medium"}
            count={Math.ceil(state?.count / rowsPerPage)}
            sx={{ mt: 5 }}
            page={page + 1}
            onChange={handleChangePage}
            color="primary"
            hideNextButton
            hidePrevButton
          />
        </Box>
      </Grid>
    </ShopContainer>
  );
}
export default ShopPage;
