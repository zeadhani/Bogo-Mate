import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import DropDownMenu from "../../UI/Global/DropDownMenu";

const settings = ["Profile", "Dashboard", "Logout"];
function ProfileIcon() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, ml: 3 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Zead" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <DropDownMenu anchorEl={anchorElUser} handleCloseMenu={handleCloseUserMenu}>
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </DropDownMenu>
    </Box>
  );
}

export default ProfileIcon;
