import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { Grid } from "@mui/material";
import HeaderImage from "../../components/UI/Global/Header";
import ProductsFilter from "../../components/UI/products/ProductsFilter";

function ProductsShopContainer({
  brand,
  matches,
  children,
  filteredItem,
  handleFilteredItemChange,
  handleSearchChange,
  search,
  resetFilters,
  categories,
  filteredCategories,
  handleFilterCategoryChange,
  stockArray,
  handleFilterStockChange,
  filteredStock,
  filteredGneder,
  handleFilterGenderChange,
  gender,
  hasGender,
}) {
  return (
    <CustomContainer nav={`/shop/${brand}`}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>
        {categories?.length > 0 && (
          <Grid item xs={12} md={3}>
            <ProductsFilter
              matches={matches}
              filteredItem={filteredItem}
              handleFilteredItemChange={handleFilteredItemChange}
              handleSearchChange={handleSearchChange}
              resetFilters={resetFilters}
              search={search}
              categories={categories}
              filteredCategories={filteredCategories}
              handleFilterCategoryChange={handleFilterCategoryChange}
              stockArray={stockArray}
              filteredStock={filteredStock}
              handleFilterStockChange={handleFilterStockChange}
              filteredGneder={filteredGneder}
              handleFilterGenderChange={handleFilterGenderChange}
              gender={gender}
              hasGender={hasGender}
            />
          </Grid>
        )}
        {children}
      </Grid>
    </CustomContainer>
  );
}

export default ProductsShopContainer;
