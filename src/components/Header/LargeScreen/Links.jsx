import { Box, Typography } from "@mui/material";
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
        my: 1,

        display: "block",
      }}
      variant="body1"
      onClick={handlenavigate(link)}
    >
      {text}
    </Typography>
  );
};

function Links() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mx: "auto",
        px: 6,
        color: "white",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <CustomLink text={"Home"} link={"/"} /> |
      <CustomLink text={"About us"} link={"/About us"} /> |
      <CustomLink text={"Shop"} link={"/shop"} /> |
      <CustomLink text={"Contact"} link={"/"} />
    </Box>
  );
}

export default Links;
