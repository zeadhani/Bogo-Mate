import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

import Links from "./Links";

import { Adb } from "@mui/icons-material";
import ProfileIcon from "./ProfileIcon";
import { colors } from "../../../Theme";
function LargeNavbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: colors.grey[900] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Adb sx={{ display: "flex", mr: 1 }} />
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
          <ProfileIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LargeNavbar;
