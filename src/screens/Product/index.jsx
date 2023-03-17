import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductsFilter from "../../components/UI/products/ProductsFilter";
import Products from "../../components/UI/products/Products";
import HeaderImage from "../../components/UI/Global/Header";
import Error from "../../components/UI/Global/Error";
import ProductsShopContainer from "./productsShpContainer";
import LoadingData from "../../components/UI/Global/LoadingData";
import useProductsData from "../../hooks/products/useProductsData";

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

  const ShopContainer = ({ products }) => {
    return (
      <Grid item xs={matches ? 12 : 9}>
        <Products matches={matches} products={products} />
        <Box display={"flex"} justifyContent={"center"}>
          <Pagination
            count={10}
            sx={{ mt: 5 }}
            color="primary"
            hideNextButton
            hidePrevButton
          />
        </Box>
      </Grid>
    );
  };
  return (
    <ProductsShopContainer brand={brand} matches={matches}>
      {state?.products?.length === 0 ? (
        <Grid item xs={matches ? 12 : 9}>
          <Typography textAlign={"center"} variant="h5">
            No Items Available
          </Typography>
        </Grid>
      ) : (
        <ShopContainer products={state?.products} />
      )}
    </ProductsShopContainer>
  );
}

export default ProductsDashboard;

