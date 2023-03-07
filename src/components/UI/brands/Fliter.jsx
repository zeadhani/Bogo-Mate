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
  IconButton,
} from "@mui/material";
import { colors } from "../../../Theme";
import { motion } from "framer-motion";
import { Close, Menu } from "@mui/icons-material";
import SearchBar from "../../Forms/searchBar";
const preferences = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
  { id: 4, label: "Option 4" },
  { id: 5, label: "Option 5" },
];
function FilterList({ matches }) {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
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
  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };
  const clearPreferences = () => {
    setSelectedPreferences([]);
  };
  return (
    <Box sx={{ position: "relative", my: 1 }}>
      {matches && (
        <Box display={"flex"} gap={1}>
          <IconButton onClick={handleOpenFilter}>
            {openFilter ? <Close /> : <Menu />}
          </IconButton>
          <Typography variant="h6" alignSelf={"center"}>
            Filters
          </Typography>
        </Box>
      )}
      {(openFilter || !matches) && (
        <Box
          sx={{
            paddingX: "10px",
            borderRight: "1px solid #e0e0e0",
            height: matches ? "fit-content" : "100%",
            margin: matches ? "0px" : "0 12px",
            position: matches && "absolute",
            bgcolor: matches ? colors.grey[100] : "transparent",
            left: 0,
            right: 0,
            top: 44,
            zIndex: 999,
            paddingY: matches ? "20px" : "10px",
            borderRadius: "5px",
            width: "100%",
          }}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Box mb={2}>
            <Typography variant="h6" gutterBottom>
              Search
            </Typography>

            <Divider style={{ marginBottom: "16px" }} />
            <SearchBar name={'brands'}/>
          </Box>

          <Typography variant="h6" gutterBottom>
            Categories
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
      )}
    </Box>
  );
}

export default FilterList;
