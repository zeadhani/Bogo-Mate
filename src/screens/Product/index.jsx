import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Error from "../../components/UI/Global/Error";
import ProductsShopContainer from "./productsShpContainer";
import LoadingData from "../../components/UI/Global/LoadingData";
import useProductsData from "../../hooks/products/useProductsData";
import handleReverseSortChange from "../../utils/handleReverseSortChange";
import ProductItems from "../../components/UI/products/ProductItems";

const stockArray = [{ name: "inStock" }, { name: "outStock" }];
function ProductsDashboard() {
  const { brand } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log("index");
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
      {state?.products?.length === 0 ? (
        <Grid item xs={matches ? 12 : 9} mt={5}>
          <Typography textAlign={"center"} variant="h4">
            No Items Available
          </Typography>
        </Grid>
      ) : (
        <ProductItems matches={matches} products={state?.products} />
      )}
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={matches ? "center" : "right"}>
          <Pagination
            size={matches ? "small" : "medium"}
            count={Math.ceil(state?.count / rowsPerPage)}
            onChange={handleChangePage}
            sx={{ mt: 5 }}
            page={page + 1}
            color="primary"
            hideNextButton
            hidePrevButton
          />
        </Box>
      </Grid>
    </ProductsShopContainer>
  );
}

export default ProductsDashboard;
