import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import CustomContainer from "../CustomContainer";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function CustomProfileContainer({ nav, children }) {
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:800px)");
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <CustomContainer nav={nav}>
      {matches && (
        <Box>
          <Button
            variant="text"
            color="primary"
            onClick={handleGoBack}
            startIcon={<ArrowBack />}
            sx={{ mt: 1 }}
          >
            Go Back
          </Button>
        </Box>
      )}
      {children}
    </CustomContainer>
  );
}

export default CustomProfileContainer;
