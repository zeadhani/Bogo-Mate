import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomContainer from "../CustomContainer";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function CustomProfileContainer({ nav, children, title }) {
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:800px)");
  const handleGoBack = () => {
    if (title === "Orders history") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };
  return (
    <CustomContainer nav={nav}>
      {matches && (
        <Box
          sx={{
            position: "relative",
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="text"
            color="primary"
            onClick={handleGoBack}
            startIcon={<ArrowBack />}
          >
            Go Back
          </Button>
          <Typography
            variant="h6"
            textTransform={"uppercase"}
            alignSelf={"center"}
          >
            {title}
          </Typography>
        </Box>
      )}
      {children}
    </CustomContainer>
  );
}

export default CustomProfileContainer;
