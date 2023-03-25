import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import FormCard from "./FormCard";
import CustomTextField from "./CustomTextField";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import * as yup from "yup";
import useImage from "../../hooks/global/useImage";
import ImageFileUpload from "./ImageFileUpload";
import ImageFileDisplay from "./ImageFileDisplay";
import axios from "axios";
import { toast } from "react-toastify";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm({ handleNext, handleNewUser }) {
  const [serverErrors, setServerErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  let form_data = new FormData();

  const {
    handleImageUpload: handleUserImageUpload,
    imageFile: userImageFile,
    imageFileerror: userImageFileError,
    changeImageFileError: changeUserFileError,
  } = useImage();
  const {
    handleImageUpload: handleNationalIdImage,
    imageFile: nationalIdFile,
    imageFileerror: nationalIdFileError,
    changeImageFileError: changeNationalIdFileError,
  } = useImage();
  const handleFormSubmit = async (values) => {
    setServerErrors("");
    setLoading(true);
    try {
      if (!userImageFile || userImageFileError) {
        changeUserFileError("Image is required");
        return;
      }
      if (!nationalIdFile || nationalIdFileError) {
        changeNationalIdFileError("National id image is required");
        return;
      }
      const {
        first_name,
        last_name,
        email,
        address,
        phone,
        password,
        confirmPassword,
      } = values;
      form_data.append("first_name", first_name);
      form_data.append("last_name", last_name);
      form_data.append("email", email);
      form_data.append("address", address);
      form_data.append("phone", phone);
      form_data.append("password", password);
      form_data.append("confirmPassword", confirmPassword);
      form_data.append("image", userImageFile);
      form_data.append("nationalIdImage", nationalIdFile);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        form_data
      );
      if (res.statusText !== "OK") return;
      toast.success("Your account is Created Successfully!");
      handleNewUser(res.data.id);
      handleNext();
    } catch (err) {
      setServerErrors(err.response.data.error);
    }
    setLoading(false);
  };
  const formValidation = yup.object().shape({
    first_name: yup.string().required("first name is required"),
    last_name: yup.string().required("last name is required"),
    email: yup.string().email().required("enter a valid email"),
    address: yup.string().required("address is required"),
    phone: yup.string().length(11).required("enter a valid number"),
    password: yup.string().required("password  is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  return (
    <Box sx={{ width: { xs: "90%", md: "50%" } }}>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <Paper elevation={4} sx={{ padding: 4 }}>
        <Typography variant="h4" textTransform={"capitalize"} mb={1}>
          Register
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={formValidation}
        >
          {({ errors, touched, handleSubmit }) => (
            <FormCard
              serverErrors={serverErrors}
              loading={loading}
              handleSubmit={handleSubmit}
            >
              <Box display={"flex"} justifyContent={"space-between"} gap={2}>
                <CustomTextField
                  type={"text"}
                  name="first_name"
                  label={"First Name"}
                  errors={errors.first_name}
                  touched={touched.first_name}
                />
                <CustomTextField
                  type={"text"}
                  name="last_name"
                  label={"Last Name"}
                  errors={errors.last_name}
                  touched={touched.last_name}
                />
              </Box>
              <CustomTextField
                type={"text"}
                name="email"
                label={"Email "}
                errors={errors.email}
                touched={touched.email}
              />
              <CustomTextField
                type={"text"}
                name="address"
                label={"Address"}
                errors={errors.address}
                touched={touched.address}
              />
              <CustomTextField
                type={"text"}
                name="phone"
                label={"Mobile Number"}
                errors={errors.phone}
                touched={touched.phone}
              />
              <Box display={"flex"} justifyContent={"space-between"} gap={2}>
                <CustomTextField
                  type={"password"}
                  name="password"
                  label={"Password"}
                  errors={errors.password}
                  touched={touched.password}
                />

                <CustomTextField
                  type={"password"}
                  name="confirmPassword"
                  label={"Confirm Password"}
                  errors={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
              </Box>
              <Box display={"flex"} justifyContent={"space-around"}>
                <Box width={"100%"}>
                  <ImageFileUpload
                    label={"Image"}
                    add={"true"}
                    handleImageUpload={(e) => handleUserImageUpload(e)}
                    imageFileerror={userImageFileError}
                  />
                  <ImageFileDisplay imageFile={userImageFile} />
                </Box>
                <Box width={"100%"}>
                  <ImageFileUpload
                    label={"National Id Image"}
                    add={"true"}
                    handleImageUpload={(e) => handleNationalIdImage(e)}
                    imageFileerror={nationalIdFileError}
                  />
                  <ImageFileDisplay imageFile={nationalIdFile} />
                </Box>
              </Box>
              <FormButton>Next</FormButton>
              <Box textAlign={"center"}>
                <Typography align="center">Already have an account?</Typography>
                <Link
                  to="/Auth/Login"
                  color="secondary"
                  style={{ color: "#222", textAlign: "center" }}
                >
                  Login
                </Link>
              </Box>
            </FormCard>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default RegisterForm;
