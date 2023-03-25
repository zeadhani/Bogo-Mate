import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import FormButton from "../../../Forms/FormButton";

function TermsAndConditions({ handleFinish }) {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);
  const handleAgreeChange = (event) => {
    setError(false)
    setAgree(event.target.checked);
  };
  const handleregisterFinish = () => {
    if (!agree) {
      setError(true);
    } else {
      handleFinish();
    }
  };
  return (
    <Box p={2} color={"#f5f5f5"}>
      <Typography variant="h5" gutterBottom>
        Terms and Conditions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to our ecommerce platform, where we help people find the best
        offers and connect with each other to take advantage of them. By using
        our platform, you agree to the following terms and conditions:
      </Typography>
      <Typography variant="body1" gutterBottom>
        - You must be 16 years of age or older to use our platform.
      </Typography>
      <Typography variant="body1" gutterBottom>
        - Your account must be verified before you can use our platform.
        Verification may take up to 24 hours, as we take security very seriously
        and want to protect our users from spam and unknown accounts.
      </Typography>
      <Typography variant="body1" gutterBottom>
        - You are responsible for any actions taken using your account,
        including any offers made or accepted.
      </Typography>
      <Typography variant="body1" gutterBottom>
        - We reserve the right to terminate or suspend your account at any time
        for any reason, including but not limited to violation of these terms
        and conditions.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            sx={{ color: error ? "red" : "#f5f5f5" }}
            checked={agree}
            onChange={handleAgreeChange}
          />
        }
        label={
          <Typography variant="body1" sx={{ color: error ? "red" : "#f5f5f5" }}>
            {!error && "I agree to the terms and conditions"}
            {error && "Please accept the terms and conditions"}
          </Typography>
        }
      />
      <FormButton action={handleregisterFinish}>Finish</FormButton>
    </Box>
  );
}

export default TermsAndConditions;
