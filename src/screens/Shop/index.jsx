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
import handleReverseSortChange from "../../utils/handleReverseSortChange";

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

  const BrandsContainer = ({ brands }) => {
    return (
      <>
        <Grid item xs={12} md={9}>
          <Brands matches={matches} brands={brands} />
          <Box display={"flex"} justifyContent={"center"}>
            <Pagination
              size={matches ? "small" : "medium"}
              count={Math.ceil(state?.count / rowsPerPage)}
              sx={{ mt: 5 }}
              page={page + 1}
              onChange={handleChangePage}
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
      filteredItem={handleReverseSortChange({ order: orderBy, sort })()}
      handleFilteredItemChange={handleSortChange}
      resetFilters={resetFilters}
      search={search}
      handleSearchChange={handleSearchChange}
    >
      {state?.brands?.length === 0 ? (
        <Grid item xs={12}>
          <Typography textAlign={"center"} variant="h5">
            No Items Available
          </Typography>
        </Grid>
      ) : (
        <BrandsContainer brands={state?.brands} />
      )}
      {/* <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"center"} pt={5}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            count={state?.count ? state?.count : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Grid> */}
    </ShopContainer>
  );
}
export default ShopPage;
