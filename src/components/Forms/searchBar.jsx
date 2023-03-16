import { MenuOutlined, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBarSlice";

function SearchBar({ rednerMenu, name ,search,handleSearchChange}) {
  const dispatch = useDispatch();
  const openSideBar = () => {
    dispatch(sideBarActions.open());
  };
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
        <IconButton sx={{ color: "#222" }} onClick={openSideBar}>
          <MenuOutlined />
        </IconButton>
      )}
      <InputBase
        placeholder={`search for ${name}...`}
        sx={{ flexGrow: 1, marginLeft: "10px", touchAction: "none" }}
        value={search}
        onChange={handleSearchChange}
      />
      <IconButton sx={{ padding: 0 }}>
        <Search />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
