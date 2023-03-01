import {
  ChatBubble,
  Diversity3,
  House,
  Person,
  Shop2,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuIcon = ({ text, children }) => {
  const navigate = useNavigate();
  const handleNavigate = (text) => {
    return () => {
      navigate(`/${text === "Home" ? "" : text}`);
    };
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <IconButton sx={{ color: "#222" }} onClick={handleNavigate(text)}>
        {children}
      </IconButton>
      <Typography variant="caption">{text}</Typography>
    </Box>
  );
};
function MobileMenu() {
  return (
    <Box zIndex={100}>
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
        }}
        component={motion.div}
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
      >
        <MenuIcon text={"Home"}>
          <House sx={{ fontSize: "25px" }} />
        </MenuIcon>
        <MenuIcon text={"About us"}>
          <Diversity3 sx={{ fontSize: "25px" }} />
        </MenuIcon>
        <MenuIcon text={"Shop"}>
          <Shop2 sx={{ fontSize: "25px" }} />
        </MenuIcon>
        <MenuIcon text={"Contact"}>
          <ChatBubble sx={{ fontSize: "25px" }} />
        </MenuIcon>
        <MenuIcon text={"Profile"}>
          <Person sx={{ fontSize: "25px" }} />
        </MenuIcon>
      </Box>
    </Box>
  );
}

export default MobileMenu;
