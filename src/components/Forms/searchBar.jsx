import { MenuOutlined, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
import { useProSidebar } from "react-pro-sidebar";

function SearchBar({ rednerMenu }) {
  const { collapseSidebar } = useProSidebar();
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
      {rednerMenu && (
        <IconButton sx={{ color: "#222" }} onClick={() => collapseSidebar()}>
          <MenuOutlined />
        </IconButton>
      )}
      <InputBase
        placeholder={`search for products...`}
        sx={{ flexGrow: 1, marginLeft: "10px", touchAction: "manipulation" }}
      />
      <IconButton sx={{ padding: 0 }}>
        <Search />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
