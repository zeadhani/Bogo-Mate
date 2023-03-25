import React, { useState } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import RegisterForm from "../../components/Forms/RegisterForm";
import { useSearchParams } from "react-router-dom";
import RegisterNewPref from "../../components/UI/Global/Register/RegisterNewPref";

function Register() {
  const [searchParams] = useSearchParams();
  const url = new URL(window.location);
  const [step, setStep] = useState(
    searchParams.get("step") ? parseInt(searchParams.get("step")) : 0
  );
  const [newUser, setNewUser] = useState(
    searchParams.get("user") ? parseInt(searchParams.get("user")) : null
  );
  const handleNewUser = (user) => {
    url.searchParams.set("user", user);
    window.history.pushState({}, "", url);
    setNewUser(user);
  };
  const handleNext = () => {
    url.searchParams.set("step", step + 1);
    window.history.pushState({}, "", url);
    setStep((prevStep) => prevStep + 1);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <RegisterForm handleNext={handleNext} handleNewUser={handleNewUser} />
        );
      case 1:
        return <RegisterNewPref handleNext={handleNext} newUser={newUser} />;
      case 2:
        return <Typography />;
      default:
        return "Unknown step";
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#0c101b",
        flexDirection: "column",
        gap: 5,
        paddingY: "5vh",
        minHeight:"100vh"
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{
          textTransform: "uppercase",
          // transform: "translateY(-100px)",
          color: "#f5f5f5",
        }}
      >
        Register to bogo
      </Typography>
      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          "& .MuiStepIcon-root": {
            fontSize: "23px",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "green",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "grey",
            fontSize: "35px",
          },
        }}
      >
        <Stepper activeStep={step}>
          {Array(3)
            .fill(0)
            .map((label, index) => (
              <Step key={index}>
                <StepLabel />
              </Step>
            ))}
        </Stepper>
      </Box>
      {getStepContent(step)}
    </Box>
  );
}

export default Register;
