import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation({ pathname }) {
  const links = pathname.split("/").filter((item) => item !== "");

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    return () => {
      navigate(`/${path}`);
    };
  };
  return (
    <>
      {pathname !== "/" && (
        <Box display={"flex"} my={2} gap={1}>
          <Typography onClick={handleNavigate("")} sx={{ cursor: "pointer" }}>
            Home
          </Typography>
          {links.map((item) => (
            <Typography
              key={item}
              onClick={handleNavigate(item)}
              sx={{ cursor: "pointer" }}
            >
              / {item}
            </Typography>
          ))}
        </Box>
      )}
    </>
  );
}

export default Navigation;
