import React, { useState } from "react";
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

function FilterList({ matches, preferences }) {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const handlePreferenceToggle = (preference) => () => {
    const currentIndex = selectedPreferences.indexOf(preference);
    const newPreferences = [...selectedPreferences];

    if (currentIndex === -1) {
      newPreferences.push(preference);
    } else {
      newPreferences.splice(currentIndex, 1);
    }

    setSelectedPreferences(newPreferences);
  };
  const clearPreferences = () => {
    setSelectedPreferences([]);
  };

  return (
    <FilterContainer matches={matches} clearData={clearPreferences}>
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
        {preferences?.map((preference) => (
          <ListItem key={preference.id}>
            <ListItemText primary={preference.name} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={selectedPreferences.indexOf(preference) !== -1}
                onClick={handlePreferenceToggle(preference)}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Divider style={{ margin: "16px 0" }} />
      <Box display={"flex"} gap={1}>
        {!matches && (
          <Button variant="outlined" onClick={clearPreferences}>
            Clear Filters
          </Button>
        )}
      </Box>
    </FilterContainer>
  );
}

export default FilterList;
