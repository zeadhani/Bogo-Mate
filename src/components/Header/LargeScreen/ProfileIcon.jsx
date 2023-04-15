import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import DropDownMenu from "../../UI/Global/DropDownMenu";
import { useSelector } from "react-redux";


function ProfileIcon() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const useData = useSelector((state) => state.Auth.user);
  const email = useData.replace(/"/g, "");
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
          <Avatar alt={email} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <DropDownMenu
        anchorEl={anchorElUser}
        handleCloseMenu={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </DropDownMenu>
    </Box>
  );
}

export default ProfileIcon;
