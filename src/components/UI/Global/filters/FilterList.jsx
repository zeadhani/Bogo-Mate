import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

function CustomFilterList({
  icon,
  title,
  FilterData,
  handleFilterChange,
  filteredArray,
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ p: 0 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {FilterData?.map((item) => {
            const checked = filteredArray.indexOf(item.name) !== -1;
            return (
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    checked={checked}
                    onClick={handleFilterChange(item.name)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}

export default CustomFilterList;
