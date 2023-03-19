import React, { useState } from "react";
import FilterContainer from "../Global/filters/FilterContainer";
import { Box, Button, Divider, Slider, Typography } from "@mui/material";
import SearchBar from "../../Forms/searchBar";
import {
  Category,
  EventAvailable,
  MoneyOff,
  People,
  Storage,
} from "@mui/icons-material";

import CustomFilterList from "../Global/filters/FilterList";
import CustomSortList from "../Global/filters/sort/CustomSortList";

const FilterData = [
  { id: 1, name: "Price : high to low" },
  { id: 2, name: "Price : low to high" },
  { id: 3, name: "Latest Items" },
  { id: 4, name: "Oldest Items" },
];

function ProductsFilter({
  matches,
  resetFilters,
  filteredItem,
  handleFilteredItemChange,
  search,
  handleSearchChange,
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
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FilterContainer matches={matches} clearData={resetFilters}>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        <Divider style={{ marginBottom: "16px" }} />
        <SearchBar
          search={search}
          handleSearchChange={handleSearchChange}
          name={"products"}
        />
      </Box>
      <Divider style={{ margin: "10px 0" }} />
      <CustomFilterList
        FilterData={categories}
        icon={<Category />}
        title={"categories"}
        filteredArray={filteredCategories}
        handleFilterChange={handleFilterCategoryChange}
      />

      <Divider style={{ margin: "10px 0" }} />

      {/* {hasGender && (
        <>
          <CustomFilterList
            FilterData={gender}
            icon={<People />}
            title={"gender"}
            filteredArray={filteredGneder}
            handleFilterChange={handleFilterGenderChange}
          />
          <Divider style={{ margin: "10px 0" }} />
        </>
      )} */}
      <CustomFilterList
        FilterData={stockArray}
        icon={<Storage />}
        title={"Stock"}
        filteredArray={filteredStock}
        handleFilterChange={handleFilterStockChange}
      />

      <Divider style={{ margin: "10px 0" }} />
      <CustomSortList
        FilterData={FilterData}
        filteredItem={filteredItem}
        handleFilteredItemChange={handleFilteredItemChange}
      />

      <Divider style={{ margin: "16px 0" }} />
      <Box display={"flex"} gap={1}>
        {!matches && (
          <Button variant="outlined" onClick={resetFilters}>
            Clear Filters
          </Button>
        )}
      </Box>
    </FilterContainer>
  );
}

export default ProductsFilter;
