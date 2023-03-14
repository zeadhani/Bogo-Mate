import React from "react";
import { AppBar, Typography, Box, Container } from "@mui/material";
import svg from "../../../images/image3.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SettingData from "./settingData";
function Footer() {
  const isLoggedIn = useSelector((state) => state.Auth.loggedIn);

  return (
    <>
      {isLoggedIn && (
        <AppBar
          position="relative"
          sx={{
            pt: 2,
            pb: 2,
            backgroundImage: `url(${svg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Container maxWidth="lg">
            <SettingData />
          </Container>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 1,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Link to="#" style={{ color: "white", fontSize: "0.75rem" }}>
                Terms of Service
              </Link>
              <Typography sx={{ color: "white", mx: 1 }}>/</Typography>
              <Link to="#" style={{ color: "white", fontSize: "0.75rem" }}>
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </AppBar>
      )}
    </>
  );
}

export default Footer;
