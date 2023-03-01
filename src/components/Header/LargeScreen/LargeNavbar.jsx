import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

import Links from "./Links";

import { Adb } from "@mui/icons-material";
import ProfileIcon from "./ProfileIcon";
import { colors } from "../../../Theme";
import SearchBar from "../../Forms/searchBar";
function LargeNavbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: colors.grey[900] ,py:1}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Adb sx={{ display: "flex", mr: 2}} />
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
          <Links />
          <SearchBar />
          <ProfileIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LargeNavbar;
