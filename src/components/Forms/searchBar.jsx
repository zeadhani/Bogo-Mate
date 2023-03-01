import { MenuOutlined, Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import DropDownMenu from "../UI/Global/DropDownMenu";

function SearchBar() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [menuValue, setMenuValue] = React.useState("Products");
  const handleOpenMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const changeMenuValue = (name) => {
    setMenuValue(name);
  };
  const handleCloseMenu = () => {
    setOpenMenu(null);
  };
  const searchBy = ["Products", "brands"];
  return (
    <>
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
        <IconButton sx={{ color: "#222" }} onClick={handleOpenMenu}>
          <MenuOutlined />
        </IconButton>
        <InputBase
          placeholder={`search for ${menuValue}`}
          sx={{ flexGrow: 1, marginLeft: "10px" }}
        />
        <IconButton sx={{ padding: 0 }}>
          <Search />
        </IconButton>
      </Box>
      <DropDownMenu anchorEl={openMenu} handleCloseMenu={handleCloseMenu}>
        <MenuItem>
          <Typography
            textTransform={"capitalize"}
            textAlign="left"
            variant="caption"
            fontWeight={"bold"}
          >
            search by
          </Typography>
        </MenuItem>
        {searchBy.map((item) => (
          <MenuItem
            key={item}
            onClick={() => {
              handleCloseMenu();
              changeMenuValue(item);
            }}
          >
            <Typography
              textTransform={"lowercase"}
              textAlign="left"
              variant="caption"
            >
              {item}
            </Typography>
          </MenuItem>
        ))}
      </DropDownMenu>
    </>
  );
}

export default SearchBar;
