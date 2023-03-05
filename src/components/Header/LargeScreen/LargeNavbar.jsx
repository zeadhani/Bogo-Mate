import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import svg from "../../../images/AbstractPaper.svg";
import Links from "./Links";

import { Adb } from "@mui/icons-material";
import ProfileIcon from "./ProfileIcon";

import SearchBar from "../../Forms/searchBar";
function LargeNavbar() {
  return (
    <Box sx={{ backgroundImage: `url(${svg})`, py: 1 ,backgroundRepeat:"no-repeat" ,backgroundSize:'cover'}}>
      <AppBar position="static" sx={{ bgcolor:'transparent' }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <Adb sx={{ display: "flex", mr: 2 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: "flex",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOGO
            </Typography>
            {/* <Links /> */}
            <SearchBar />
            <ProfileIcon />
          </Toolbar>
        </Container>
      </AppBar>
      <Links />
    </Box>
  );
}

export default LargeNavbar;
