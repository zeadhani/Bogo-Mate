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

function ShopPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <CustomContainer nav={"/shop"}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            matches={matches}
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FilterList matches={matches} />
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
      </Grid>
    </CustomContainer>
  );
}

export default ShopPage;
