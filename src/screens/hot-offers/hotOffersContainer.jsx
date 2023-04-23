import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Grid } from "@mui/material";
import HeaderImage from "../../components/UI/Global/Header";
import ProductsFilter from "../../components/UI/products/ProductsFilter";

function HotOffersContainer({
  matches,
  children,
  filteredItem,
  handleFilteredItemChange,
  handleSearchChange,
  search,
  resetFilters,
  stockArray,
  handleFilterStockChange,
  filteredStock,
}) {
  return (
    <CustomContainer nav={`/hot-offers`}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>

        {filteredItem && (
          <Grid item xs={12} md={3}>
            <ProductsFilter
              matches={matches}
              filteredItem={filteredItem}
              handleFilteredItemChange={handleFilteredItemChange}
              handleSearchChange={handleSearchChange}
              resetFilters={resetFilters}
              search={search}
              stockArray={stockArray}
              filteredStock={filteredStock}
              handleFilterStockChange={handleFilterStockChange}
            />
          </Grid>
        )}

        {children}
      </Grid>
    </CustomContainer>
  );
}

export default HotOffersContainer;
