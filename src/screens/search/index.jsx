import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import useSearchData from "../../hooks/search/useSearchData";
import CustomFetchItems from "../../components/UI/Global/CustomFetchItems";

import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import ProductItem from "../../components/UI/products/ProductItem";

function SearchComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { handleChangePage, isError, isLoading, page, rowsPerPage, state,search } =
    useSearchData();

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return (
      <Grid item xs={12}>
        <LoadingData />
      </Grid>
    );
  }

  return (
    <CustomContainer>
      <Box my={4}>
        <Typography mb={2} variant={matches?"h4":"h3"}>You searched for " {search} "</Typography>
        <CustomFetchItems
          count={state?.count}
          handleChangePage={handleChangePage}
          matches={matches}
          page={page}
          rowsPerPage={rowsPerPage}
          model={state?.products}
        >
          <Grid container spacing={2}>
            {state?.products?.map((item) => (
              <Grid item key={item.id} xs={6} md={4} lg={3}>
                <ProductItem product={item} />
              </Grid>
            ))}
          </Grid>
        </CustomFetchItems>
      </Box>
    </CustomContainer>
  );
}

export default SearchComponent;
