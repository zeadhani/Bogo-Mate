import React from "react";
import { useParams } from "react-router-dom";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Error from "../../components/UI/Global/Error";
import ProductsShopContainer from "./productsShpContainer";
import LoadingData from "../../components/UI/Global/LoadingData";
import useProductsData from "../../hooks/products/useProductsData";
import handleReverseSortChange from "../../utils/handleReverseSortChange";
import ProductItems from "../../components/UI/products/ProductItems";

import CustomFetchItems from "../../components/UI/Global/CustomFetchItems";

const stockArray = [{ name: "inStock" }, { name: "outStock" }];
function ProductsDashboard() {
  const { brand } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {
    filtered,
    filteredGneder,
    filteredStock,
    handleChangePage,
    handleChangeRowsPerPage,
    handleFilterChange,
    handleFilterGenderChange,
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
  } = useProductsData({ filteredBrand: brand });
  const resetFilters = () => {
    resetProductFilters();
    resetCommonFilters();
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return (
      <ProductsShopContainer>
        <Grid item xs={12}>
          <LoadingData />
        </Grid>
      </ProductsShopContainer>
    );
  }

  return (
    <ProductsShopContainer
      brand={brand}
      matches={matches}
      filteredItem={handleReverseSortChange({ order: orderBy, sort })()}
      handleFilteredItemChange={handleSortChange}
      handleSearchChange={handleSearchChange}
      resetFilters={resetFilters}
      search={search}
      categories={state?.categories}
      filteredCategories={filtered}
      handleFilterCategoryChange={handleFilterChange}
      stockArray={stockArray}
      filteredStock={filteredStock}
      handleFilterStockChange={handleFilterStockChange}
      filteredGneder={filteredGneder}
      handleFilterGenderChange={handleFilterGenderChange}
      gender={state?.gender}
      hasGender={state?.hasGender}
    >
      <CustomFetchItems
        count={state?.count}
        handleChangePage={handleChangePage}
        matches={matches}
        page={page}
        rowsPerPage={rowsPerPage}
        model={state?.products}
      >
        <ProductItems matches={matches} brands={state?.products} />
      </CustomFetchItems>
    </ProductsShopContainer>
  );
}

export default ProductsDashboard;
