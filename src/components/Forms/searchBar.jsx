import { MenuOutlined, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: "20px",
        padding: "5px",
        height: "fit-content",
        flex: 1,
      }}
    >
      <IconButton color="#222">
        <MenuOutlined />
      </IconButton>
      <InputBase
        placeholder="Search..."
        sx={{ flexGrow: 1, marginLeft: "10px" }}
      />
      <IconButton sx={{ padding: 0 }}>
        <Search />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
