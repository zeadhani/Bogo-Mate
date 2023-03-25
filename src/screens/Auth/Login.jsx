import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { authActions } from "../../store/AuthSlice";
import { Box, Paper, Typography } from "@mui/material";
import { Formik } from "formik";
import FormCard from "../../components/Forms/FormCard";
import CustomTextField from "../../components/Forms/CustomTextField";
import FormButton from "../../components/Forms/FormButton";

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
    setServerErrors("");
    const { email, password } = values;
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );

      if (res.statusText !== "OK") return;
      dispatch(
        authActions.Login({
          user: res.data.user.email,
          token: res.data.token,
        })
      );
      navigate("/");
    } catch (err) {
      setServerErrors(err.response.data.error);
    }
    setLoading(false);
  };
  const formValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0c101b",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{
          textTransform: "uppercase",
          transform: "translateY(-50px)",
          color: "#f5f5f5",
        }}
      >
        Welcome to Bogo
      </Typography>
      <Paper elevation={4} sx={{ padding: 4, width: { xs: "90%", md: "50%" } }}>
        <Typography component="h1" variant="h4" textTransform={"capitalize"}>
          Sign in
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={formValidation}
        >
          {({ values, errors, touched, handleSubmit }) => (
            <FormCard
              serverErrors={serverErrors}
              loading={loading}
              handleSubmit={handleSubmit}
            >
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
              <FormButton>Sign In</FormButton>
              <Typography align="center">Don't have an account?</Typography>
              <Link
                to="/Auth/Register"
                color="secondary"
                style={{ color: "#222", textAlign: "center" }}
              >
                Register
              </Link>
            </FormCard>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default Login;
