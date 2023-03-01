import { Box, IconButton } from "@mui/material";
import React from "react";
import SearchBar from "../../Forms/searchBar";
import { Logout } from "@mui/icons-material";

function SearchHeader() {
  return (
    <Box display={"flex"} py={2} zIndex={100}>
      <SearchBar />
      <IconButton size="large" sx={{ color: "#f5f5f5" }}>
        <Logout />
      </IconButton>
    </Box>
  );
}

export default SearchHeader;
