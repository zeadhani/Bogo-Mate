import React, { useState } from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box, useTheme } from "@mui/material";
import { Formik } from "formik";
import FormCard from "../../components/Forms/FormCard";
import CustomTextField from "../../components/Forms/CustomTextField";
import FormButton from "../../components/Forms/FormButton";
import { useSelector } from "react-redux";
import authFetch from "../../service/interceptors";
import { toast } from "react-toastify";
import * as yup from "yup";
const initialValues = {
  oldPassword: "",
  newPassword: "",
};
function ChangePassword() {
  const theme = useTheme();
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  const handleFormSubmit = async (values) => {
    setServerErrors("");

    setLoading(true);
    const { oldPassword, newPassword } = values;
    try {
      const res = await authFetch.patch(`/user/editpassword/${email}`, {
        oldPassword,
        newPassword,
      });
      if (res.statusText !== "OK") return;
      toast.success("Password updated successfully");
    } catch (error) {
      setServerErrors(error.response.data.error);
    }
    setLoading(false);
  };

  const formValidation = yup.object().shape({
    oldPassword: yup.string().min(8).required("old Password  is required"),
    newPassword: yup.string().min(8).required("new Password  is required"),
  });

  return (
    <CustomProfileContainer nav={"/profile/password"} title={"edit password"}>
      <Box my={2}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={formValidation}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormCard
              serverErrors={serverErrors}
              loading={loading}
              handleSubmit={handleSubmit}
            >
              <CustomTextField
                type={"password"}
                name="oldPassword"
                label={"Old Password"}
                touched={touched.oldPassword}
                errors={errors.oldPassword}
              />
              <CustomTextField
                type={"password"}
                name="newPassword"
                label={"New Password"}
                touched={touched.newPassword}
                errors={errors.newPassword}
              />

              <FormButton theme={theme}>Save</FormButton>
            </FormCard>
          )}
        </Formik>
      </Box>
    </CustomProfileContainer>
  );
}

export default ChangePassword;
