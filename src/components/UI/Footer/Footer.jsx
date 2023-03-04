import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,

} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import svg from "../../../images/AbstractPaper.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <AppBar
      position="relative"
      sx={{
        pt: 1,
        pb:2,
        backgroundImage: `url(${svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ color: "white" }}>
            BOGO MATE
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            Copyright © 2023
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            href="https://www.facebook.com"
            sx={{ color: "white", mr: 1 }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.twitter.com"
            sx={{ color: "white", mr: 1 }}
          >
            <Twitter />
          </IconButton>
          <IconButton href="https://www.instagram.com" sx={{ color: "white" }}>
            <Instagram />
          </IconButton>
        </Box>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 1,
        }}
      >
        <Link to="#" style={{ color: "white", fontSize: "0.75rem" }}>
          Terms of Service
        </Link>
        <Typography sx={{ color: "white", mx: 1 }}>/</Typography>
        <Link to="#" style={{ color: "white", fontSize: "0.75rem" }}>
          Privacy Policy
        </Link>
      </Box>
    </AppBar>
  );
}

export default Footer;
