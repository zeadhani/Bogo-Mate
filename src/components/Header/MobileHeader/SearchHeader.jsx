import { Box, IconButton } from "@mui/material";
import React from "react";
import SearchBar from "../../Forms/searchBar";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/AuthSlice";

function SearchHeader() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.Logout());
  };
  return (
    <Box display={"flex"} py={2} zIndex={100}>
      <SearchBar rednerMenu={"true"} name={"products"} />
      <IconButton size="large" sx={{ color: "#f5f5f5" }} onClick={handleLogout}>
        <Logout />
      </IconButton>
    </Box>
  );
}

export default SearchHeader;
