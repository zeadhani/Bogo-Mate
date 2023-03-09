import React, { useState } from "react";
import FilterContainer from "../Global/filters/FilterContainer";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Slider,
  Typography,
} from "@mui/material";
import SearchBar from "../../Forms/searchBar";
import {
  Category,
  EventAvailable,
  ExpandLess,
  ExpandMore,
  MoneyOff,
  People,
} from "@mui/icons-material";
import FilterList from "../brands/Fliter";
import CustomFilterList from "../Global/filters/FilterList";

const preferences = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
];
function ProductsFilter({ matches }) {
  const handleClearFilters = () => {};

  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <FilterContainer matches={matches}>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Search
        </Typography>

        <Divider style={{ marginBottom: "16px" }} />
        <SearchBar name={"products"} />
      </Box>

      <CustomFilterList
        icon={<EventAvailable />}
        title={"Stock"}
        FilterData={preferences}
      />

      <Divider style={{ margin: "16px 0" }} />

      <CustomFilterList
        icon={<Category />}
        title={"Categories"}
        FilterData={preferences}
      />

      <Divider style={{ margin: "16px 0" }} />

      <CustomFilterList
        icon={<People />}
        title={"Gender"}
        FilterData={preferences}
      />

      <Divider style={{ margin: "16px 0" }} />

      <Box display={"flex"} gap={2} p={2}>
        <MoneyOff />
        <Typography variant="h6">Price Range</Typography>
      </Box>
      <Box px={4}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          aria-labelledby="range-slider"
        />
      </Box>

      <Divider style={{ margin: "16px 0" }} />
      <Button variant="outlined" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </FilterContainer>
  );
}

export default ProductsFilter;
