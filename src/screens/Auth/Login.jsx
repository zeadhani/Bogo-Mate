import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { authActions } from "../../store/AuthSlice";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Formik } from "formik";
import FormCard from "../../components/Forms/FormCard";
import { theme } from "../../Theme";
import CustomTextField from "../../components/Forms/CustomTextField";
import FormButton from "../../components/Forms/FormButton";
import { LockOutlined } from "@mui/icons-material";
import { BackGorundimage } from "../../images/image";

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
        backgroundColor: "#292929",
        bgcolor: "#d3d3d3",
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: { xs: "90%", md: "50%" } }}>
        <Avatar
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
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
              <Typography align="center">
                Don't have an account?
                <Link to="/register" color="secondary">
                  Register
                </Link>
              </Typography>
            </FormCard>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default Login;
