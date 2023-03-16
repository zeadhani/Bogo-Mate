import { ExpandLess, ExpandMore, Sort } from "@mui/icons-material";
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

function CustomSortList({
  FilterData,
  filteredItem,
  handleFilteredItemChange,
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List sx={{ p: 0 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Sort />
        </ListItemIcon>
        <ListItemText primary={"Sort"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {FilterData?.map((item) => {
            const checked = filteredItem === item.name;
      
            return (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    checked={checked}
                    onClick={handleFilteredItemChange(item.name)}
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

export default CustomSortList;
