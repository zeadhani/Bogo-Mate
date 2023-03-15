import {
  Box,
  Grid,
  Pagination,
  TablePagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

import Brands from "../../components/UI/brands/brands";
import FilterList from "../../components/UI/brands/Fliter";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import HeaderImage from "../../components/UI/Global/Header";
import usePage from "../../hooks/global/newPage";
import useCommonFilters from "../../hooks/global/useGlobalFilteredData";
import usePreferences from "../../hooks/brands/usePreferences";
import useBrands from "../../hooks/brands/useBrands";
import useBrandFilters from "../../hooks/brands/useBrandFilter";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import ShopContainer from "./shopContainer";

function ShopPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const {
    sort,
    search,
    orderBy,
    handleOrderByChange,
    handleSearchChange,
    resetCommonFilters,
    handleSortChange,
  } = useCommonFilters();
  const { pref } = usePreferences();
  const { handleFilterPrefChange, preferencesFilter, resetBrandFilters } =
    useBrandFilters();
  const { data, isError, isLoading } = useBrands({
    page,
    orderBy,
    preferencesFilter,
    rowsPerPage,
    search,
    sort,
  });

  const BrandsContainer = () => {
    return (
      <>
        <Grid item xs={12} md={3}>
          <FilterList matches={matches} preferences={pref} />
        </Grid>

        <Grid item xs={12} md={9}>
          <Brands matches={matches} />
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
  if (isLoading) {
    return <LoadingData />;
  }
  return (
    <ShopContainer>{data?.count > 0 && <BrandsContainer />}</ShopContainer>
  );
}

export default ShopPage;
