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

function CustomFilterList({ icon, title, FilterData }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [Data, setData] = useState([]);
  const handleDataToggle = (item) => () => {
    const currentIndex = Data.indexOf(item);
    const newData = [...Data];

    if (currentIndex === -1) {
      newData.push(item);
    } else {
      newData.splice(currentIndex, 1);
    }
    setData(newData);
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
          {FilterData?.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  checked={Data.indexOf(item) !== -1}
                  onClick={handleDataToggle(item)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default CustomFilterList;
