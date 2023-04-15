import React from "react";
import {
  AccountCircle,
  Chat,
  Dashboard,
  Favorite,
  History,
  HourglassTop,
  Lock,
  RateReview,
  Settings,
} from "@mui/icons-material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";
function PorfileDrawerList({ closeDrawer }) {
  return (
    <Box
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
      my={2}
    >
      <Typography textAlign={"center"} fontWeight={600} mb={1} variant="h4">
        Account Management
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={"User Profile"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary={"Account Customization"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary={"User Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary={"Settings & Preferences"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary={"Privacy & Security"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary={"Orders History"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HourglassTop />
            </ListItemIcon>
            <ListItemText primary={"Current Requests"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RateReview />
            </ListItemIcon>
            <ListItemText primary={"Reviews"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default PorfileDrawerList;
