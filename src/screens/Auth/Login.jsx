import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { authActions } from "../../store/AuthSlice";
import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import FormCard from "../../components/Forms/FormCard";
import { colors } from "../../Theme";
import CustomTextField from "../../components/Forms/CustomTextField";
import FormButton from "../../components/Forms/FormButton";
import svg from "../../images/auth.svg";
const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const dispatch = useDispatch();
  const [serverErrors, setServerErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    dispatch(
      authActions.Login({
        user: "Zead Hani Ali",
        token: "123456",
      })
    );
    navigate("/");
  };
  const formValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      sx={{
        backgroundImage: `url(${svg})`,
        color: "#f5f5f5",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={formValidation}
      >
        {({
          values,
          errors,
          touched,

          handleSubmit,
        }) => (
          <Box width={"100%"}>
            <FormCard
              serverErrors={serverErrors}
              loading={loading}
              handleSubmit={handleSubmit}
            >
              {!serverErrors && (
                <Typography
                  variant="h2"
                  textAlign={"start"}
                  pt={2}
                  color={colors.grey[100]}
                  sx={{ mb: "5px", cursor: "pointer" }}
                >
                  Login
                </Typography>
              )}
              <CustomTextField
                type={"text"}
                name="email"
                label={"Email"}
                value={values.email}
                touched={touched.email}
                errors={errors.email}
              />
              <CustomTextField
                type={"password"}
                name="password"
                label={"Password"}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
              />
              <FormButton>Login</FormButton>
            </FormCard>
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default Login;
