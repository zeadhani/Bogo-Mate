import {
  ChatBubble,
  Diversity3,
  House,
  Person,
  Shop2,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const MenuIcon = ({ text, children }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <IconButton sx={{ color: "#222" }}>{children}</IconButton>
      <Typography variant="caption">{text}</Typography>
    </Box>
  );
};
function MobileMenu() {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={600}
        textTransform={"uppercase"}
        letterSpacing={1}
        color={"#f5f5f5"}
        mb={2}
      >
        Menu
      </Typography>
      <Box
        pb={1}
        sx={{
          bgcolor: "#f5f5f5",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "8px",
          position: "fixed",
          top: "110px",
          left: "8px",
          right: "8px",
        }}
      >
        <MenuIcon text={"Home"}>
          <House sx={{ fontSize: "30px" }} />
        </MenuIcon>
        <MenuIcon text={"About us"}>
          <Diversity3 sx={{ fontSize: "30px" }} />
        </MenuIcon>
        <MenuIcon text={"Shop"}>
          <Shop2 sx={{ fontSize: "30px" }} />
        </MenuIcon>
        <MenuIcon text={"Contact"}>
          <ChatBubble sx={{ fontSize: "30px" }} />
        </MenuIcon>
        <MenuIcon text={"Profile"}>
          <Person sx={{ fontSize: "30px" }} />
        </MenuIcon>
      </Box>
    </>
  );
}

export default MobileMenu;
