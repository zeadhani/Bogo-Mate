import { MenuOutlined, Search } from "@mui/icons-material";
import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBarSlice";
import { useState } from "react";
import { useEffect } from "react";
import authFetch from "../../service/interceptors";
import { useNavigate } from "react-router-dom";

function HeaderSearch({ rednerMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleNavigate = (nav) => {
    navigate(nav);
  };
  const openSideBar = () => {
    dispatch(sideBarActions.open());
  };
  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await authFetch.get(`/search?search=${inputValue}`);
        setOptions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (inputValue) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchData, 500);
    } else {
      setOptions([]);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

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

      <Autocomplete
        sx={{
          flexGrow: 1,
          marginLeft: "10px",
        }}
        options={options}
        autoHighlight
        loading={loading}
        loadingText="Loading..."
        {...(!inputValue ? { freeSolo: true } : {})}
        noOptionsText={"No Items Found"}
        blurOnSelect={true}
        onChange={(e, value) =>
          handleNavigate(`/shop/${value.Brands.name}/${value.name}`)
        }
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`${process.env.REACT_APP_CLOUDINARY}${option.image}`}
              alt=""
            />
            {option.name}{" "}
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
              - {option.Brands.name}
            </span>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className="custom-textfield"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            variant="standard"
            placeholder="search for products..."
          />
        )}
      />
      <IconButton sx={{ padding: 0, ml: 1 }}>
        <Search />
      </IconButton>
    </Box>
  );
}

export default HeaderSearch;
