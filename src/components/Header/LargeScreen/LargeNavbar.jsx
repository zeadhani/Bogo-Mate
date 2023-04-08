import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import svg from "../../../images/AbstractPaper.svg";
import Links from "./Links";

import { Adb } from "@mui/icons-material";
import ProfileIcon from "./ProfileIcon";

import SearchBar from "../../Forms/searchBar";
import { useNavigate } from "react-router-dom";
function LargeNavbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${svg})`,
        py: 1,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "transparent" }} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
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
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              BOGO
            </Typography>
            {/* <Links /> */}
            <SearchBar name={"products"} />
            <ProfileIcon />
          </Toolbar>
        </Container>
      </AppBar>
      <Links />
    </Box>
  );
}

export default LargeNavbar;
