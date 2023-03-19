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

const customFilterData = [{ name: "female" }, { name: "male" }];
function CustomFilterList({
  icon,
  title,
  FilterData,
  handleFilterChange,
  filteredArray,
  singleItemCheck,
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
          {FilterData?.map((item, index) => {
            const checked = singleItemCheck
              ? filteredArray === item.name
              : filteredArray.indexOf(item.name) !== -1;

            return (
              <ListItem key={item.name + index}>
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
