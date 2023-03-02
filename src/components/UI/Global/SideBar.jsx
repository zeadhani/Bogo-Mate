import {
  Call,
  Close,
  Dashboard,
  Help,
  MoneyOff,
  Person,
  RequestPageSharp,
  Settings,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import { colors } from "../../../Theme";
function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const matches = useMediaQuery("(max-width:800px)");
  return (
    <Box className="sidebar">
      {matches && (
        <Sidebar
          defaultCollapsed={true}
          collapsedWidth={"0px"}
          bor
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#f8f8f8",
              height: "100vh",
            },
          }}
        >
          <Box bgcolor={colors.grey[900]}>
            <Box display={"flex"} justifyContent={"right"}>
              <IconButton
                onClick={() => collapseSidebar()}
                sx={{ color: "#f5f5f5" }}
              >
                <Close />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                gap: 2,
                py: 3,
              }}
            >
              <Avatar alt="Zead" sx={{ width: "120px", height: "120px" }} />
              <Typography textAlign={"center"} color={"#f5f5f5"} variant="h3">
                Zead Hani
              </Typography>
            </Box>
          </Box>

          <Menu>
            <SubMenu icon={<Person />} label="Profile">
              <MenuItem icon={<Dashboard />}>Dashboard</MenuItem>
              <MenuItem icon={<Settings />}>Edit profile</MenuItem>
            </SubMenu>
            <SubMenu icon={<ShoppingCart />} label="Orders">
              <MenuItem icon={<RequestPageSharp />}>Current requests</MenuItem>
              <MenuItem icon={<MoneyOff />}>Past orders</MenuItem>
            </SubMenu>
            <MenuItem icon={<Call />}>Contact us</MenuItem>
            <MenuItem icon={<Help />}>Help</MenuItem>
          </Menu>
        </Sidebar>
      )}
    </Box>
  );
}

export default SideBar;
