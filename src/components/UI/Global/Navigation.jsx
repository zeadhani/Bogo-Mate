import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation({ nav }) {
  const links = nav?.split("/").filter((item) => item !== "");
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    return () => {
      let cutString = nav.substring(0, nav.indexOf(path));
      navigate(`${cutString}${path}`);
    };
  };
  return (
    <>
      {nav && (
        <Box display={"flex"} my={2} gap={1}>
          <Typography onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            Home
          </Typography>

          {links?.map((item) => (
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
