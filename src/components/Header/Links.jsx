import { Box,  Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomLink = ({ text, link }) => {
  const navigate = useNavigate();
  const handlenavigate = (link) => {
    return () => {
      navigate(link);
    };
  };
  return (
    <Typography
      sx={{
        cursor: "pointer",
        transition: "all .3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      variant="h4"
      onClick={handlenavigate(link)}
    >
      {text}
    </Typography>
  );
};

function Links() {
  return (
    <Box sx={{ display: "flex", gap: 6, alignSelf: "center" }}>
      <CustomLink text={"Home"} link={"/"} />
      <CustomLink text={"Shop"} link={"/"} />
      <CustomLink text={"About us"} link={"/"} />
    </Box>
  );
}

export default Links;
