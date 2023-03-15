import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import useFooterData from "../../../hooks/home/useFooterData";

function SettingData() {
  const { data } = useFooterData();

  return (
    <Box
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
        <IconButton href={data?.facebook} sx={{ color: "white", mr: 1 }}>
          <Facebook />
        </IconButton>
        <IconButton href={data?.twitter} sx={{ color: "white", mr: 1 }}>
          <Twitter />
        </IconButton>
        <IconButton href={data?.instagram} sx={{ color: "white" }}>
          <Instagram />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SettingData;
