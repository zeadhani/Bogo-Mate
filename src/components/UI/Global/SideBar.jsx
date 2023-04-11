import {
  Call,
  Close,
  Dashboard,
  Help,
  MoneyOff,
  RequestPageSharp,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import { colors } from "../../../Theme";
import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../../../store/sideBarSlice";
import useUser from "../../../hooks/user/useUser";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const matches = useMediaQuery("(max-width:800px)");
  const open = useSelector((state) => state.SideBar.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeSideBar = () => {
    dispatch(sideBarActions.close());
  };

  const handleCloseDrwaer = (e) => {
    if (e.target.classList.contains("MuiModal-backdrop")) {
      closeSideBar();
    }
  };

  const handleNavigate = (nav) => {
    return () => {
      navigate("/" + nav);
      closeSideBar();
    };
  };

  const useData = useSelector((state) => state.Auth.user);
  const email = useData.replace(/"/g, "");
  const { data } = useUser({ email });

  return (
    <React.Fragment>
      {matches && (
        <Drawer
          onClick={handleCloseDrwaer}
          open={open}
          variant="temporary"
          anchor="left"
          transitionDuration={800}
        >
          <Box bgcolor={colors.grey[900]}>
            <Box display={"flex"} justifyContent={"right"}>
              <IconButton onClick={closeSideBar} sx={{ color: "#f5f5f5" }}>
                <Close />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                gap: 2,
                py: 3,
                px: 5,
              }}
            >
              <Box mx={"auto"}>
                <LazyLoadImage
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    objectFit: "contain",
                  }}
                  alt={"Profile-Image"}
                  src={`${process.env.REACT_APP_CLOUDINARY}${data?.image}`}
                />
              </Box>

              <Typography
                textTransform={"uppercase"}
                textAlign={"center"}
                color={"#f5f5f5"}
                variant="h3"
              >
                {data?.first_name + " " + data?.last_name}
              </Typography>
            </Box>
          </Box>

          <List>
            <ListItem onClick={handleNavigate}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem onClick={handleNavigate}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Edit Profile" />
            </ListItem>
            <ListItem onClick={handleNavigate}>
              <ListItemIcon>
                <RequestPageSharp />
              </ListItemIcon>
              <ListItemText primary="Current Requests" />
            </ListItem>
            <ListItem onClick={handleNavigate}>
              <ListItemIcon>
                <MoneyOff />
              </ListItemIcon>
              <ListItemText primary="Past Orders" />
            </ListItem>
            <ListItem onClick={handleNavigate("contact-us")}>
              <ListItemIcon>
                <Call />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem onClick={handleNavigate("help")}>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </React.Fragment>
  );
}

export default SideBar;
