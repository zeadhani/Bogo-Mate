import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
  Divider,
  Box,
  Button,
} from "@mui/material";

import SearchBar from "../../Forms/searchBar";
import FilterContainer from "../Global/filters/FilterContainer";

function FilterList({
  matches,
  preferences,
  resetBrandFilters,
  preferencesFilter,
  handleFilterPrefChange,
}) {
  return (
    <FilterContainer matches={matches} clearData={resetBrandFilters}>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        <Divider style={{ marginBottom: "16px" }} />
        <SearchBar name={"brands"} />
      </Box>

      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>

      <Divider style={{ marginBottom: "16px" }} />

      <List>
        {preferences?.map((preference) => {
          const checked = preferencesFilter.indexOf(preference.name) !== -1;
          return (
            <ListItem key={preference.id}>
              <ListItemText primary={preference.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  checked={checked}
                  onClick={handleFilterPrefChange(preference.name)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <Divider style={{ margin: "16px 0" }} />
      <Box display={"flex"} gap={1}>
        {!matches && (
          <Button variant="outlined" onClick={resetBrandFilters}>
            Clear Filters
          </Button>
        )}
      </Box>
    </FilterContainer>
  );
}

export default FilterList;
