import { Menu } from "@mui/material";
import React from "react";

function DropDownMenu({ anchorEl, handleCloseMenu, children }) {
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
    >
      {children}
    </Menu>
  );
}

export default DropDownMenu;
