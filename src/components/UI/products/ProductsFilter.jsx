import React, { useState } from "react";
import FilterContainer from "../Global/FilterContainer";
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

const preferences = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
  { id: 4, label: "Option 4" },
  { id: 5, label: "Option 5" },
];
function ProductsFilter({ matches }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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

      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <EventAvailable />
          </ListItemIcon>
          <ListItemText primary="Stock" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {preferences.map((preference) => (
              <ListItem key={preference.id}>
                <ListItemText primary={preference.label} />
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
        </Collapse>
      </List>

      <Divider style={{ margin: "16px 0" }} />
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {preferences.map((preference) => (
              <ListItem key={preference.id}>
                <ListItemText primary={preference.label} />
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
        </Collapse>
      </List>

      <Divider style={{ margin: "16px 0" }} />

      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Gender" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {preferences.map((preference) => (
              <ListItem key={preference.id}>
                <ListItemText primary={preference.label} />
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
        </Collapse>
      </List>
      <Divider style={{ margin: "16px 0" }} />

      <Box display={"flex"} gap={2} p={2}>
        <MoneyOff />
        <Typography variant="h6" sx>
          Price Range
        </Typography>
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
