import { MenuOutlined, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
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
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleNavigate = (nav) => {
    navigate(nav);
  };

  const openSideBar = () => {
    dispatch(sideBarActions.open());
  };
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

  useEffect(() => {
    let timeoutId;
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
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        {...(!inputValue ? { freeSolo: true } : {})}
        noOptionsText={"No Items Found"}
        loading={loading}
        inputValue={inputValue}
        onInputChange={(event, value) => setInputValue(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Search"
            className="custom-textfield"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        onChange={(event, value) => {
          if (value) {
            handleNavigate(`/shop/${value.Brands.name}/${value.name}`);
          }
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width={"30px"}
              src={`${process.env.REACT_APP_CLOUDINARY}${option.image}`}
              alt=""
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography> {option.name}</Typography>
              <Typography variant="caption">
                {option?.Brands.name ? ` - ${option.Brands.name}` : ""}
              </Typography>
            </Box>
          </Box>
        )}
      />

      <IconButton sx={{ padding: 0, ml: 1 }}>
        <Search />
      </IconButton>
    </Box>
  );
}

export default HeaderSearch;
