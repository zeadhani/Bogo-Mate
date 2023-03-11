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
import svg from "../../images/AbstractPaper.svg";
const initialValues = {
  email: "",
  password: "",
};

const image = `url(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='81' height='81' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23242424' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E"
)`;
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
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#292929",
        backgroundImage: image,
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
            <FormCard>
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
