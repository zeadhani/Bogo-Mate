import React from "react";
import { Typography, Divider, Box, Button } from "@mui/material";

import SearchBar from "../../Forms/searchBar";
import FilterContainer from "../Global/filters/FilterContainer";
import CustomFilterList from "../Global/filters/FilterList";
import { Category, Sort } from "@mui/icons-material";
import CustomSortList from "../Global/filters/sort/CustomSortList";

const FilterData = [
  { id: 3, name: "Latest Items" },
  { id: 4, name: "Oldest Items" },
];
function FilterList({
  matches,
  preferences,
  resetFilters,
  preferencesFilter,
  handleFilterPrefChange,
  filteredItem,
  handleFilteredItemChange,
  search,
  handleSearchChange,
}) {
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
          name={"brands"}
        />
      </Box>

      <CustomFilterList
        FilterData={preferences}
        icon={<Category />}
        title={"categories"}
        filteredArray={preferencesFilter}
        handleFilterChange={handleFilterPrefChange}
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

export default FilterList;
