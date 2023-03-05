import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
  Divider,
  Button,
  Box,
} from "@mui/material";
const preferences = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
  { id: 4, label: "Option 4" },
  { id: 5, label: "Option 5" },
];
function FilterList(props) {
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
    <Box
      style={{
        padding: "10px",
        borderRight: "1px solid #e0e0e0",
        height: "100%",
        margin: "0 12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filter by
      </Typography>

      <Divider style={{ marginBottom: "16px" }} />

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

      <Divider style={{ margin: "16px 0" }} />

      <Button variant="outlined" onClick={clearPreferences}>
        Clear Filters
      </Button>
    </Box>
  );
}

export default FilterList;
