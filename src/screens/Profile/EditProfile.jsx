import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Formik } from "formik";
import FormCard from "../../components/Forms/FormCard";
import CustomTextField from "../../components/Forms/CustomTextField";
import FormButton from "../../components/Forms/FormButton";
import ImageFileDisplay from "../../components/Forms/ImageFileDisplay";
import ImageFileUpload from "../../components/Forms/ImageFileUpload";
import * as yup from "yup";
import useUser from "../../hooks/user/useUser";
import { useSelector } from "react-redux";
import { useState } from "react";
import useImage from "../../hooks/global/useImage";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import authFetch from "../../service/interceptors";
import { toast } from "react-toastify";
function EditProfile() {
  const [serverErrors, setServerErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState();
  const [nationalIdAdd, setNationalIdAdd] = useState();
  let form_data = new FormData();
  const theme = useTheme();
  const {
    handleImageUpload: handleUserImageUpload,
    imageFile: userImageFile,
    imageFileerror: userImageFileError,
    changeImageFileError: changeUserFileError,
    resetImageFile: resetUserProfile,
  } = useImage();
  const {
    handleImageUpload: handleNationalIdImage,
    imageFile: nationalIdFile,
    imageFileerror: nationalIdFileError,
    changeImageFileError: changeNationalIdFileError,
    resetImageFile: resetNationalDFile,
  } = useImage();
  const userData = useSelector((state) => state.Auth.user);
  const email = userData.replace(/"/g, "");
  const { data: user} = useUser({ email });
  const handleFormSubmit = async (values) => {
    if (!user.first_name) return;
    setServerErrors("");
    if (add) {
      if (!userImageFile || userImageFileError) {
        changeUserFileError("Profile Image is required");
        return;
      }
    }
    if (nationalIdAdd) {
      if (!nationalIdFile || nationalIdFileError) {
        changeNationalIdFileError("National ID Image is required");
        return;
      }
    }
    const { first_name, last_name, phone, email, address } =
      values;
    setLoading(true);
    form_data.append("first_name", first_name);
    form_data.append("last_name", last_name);
    form_data.append("email", email);
    form_data.append("address", address);
    form_data.append("phone", phone);
   
    if (userImageFile) {
      form_data.append("image", userImageFile);
    }
    if (nationalIdFile) {
      form_data.append("nationalIdImage", nationalIdFile);
    }
    try {
      const res = await authFetch.patch(`/user/edituserweb/${user.id}`, form_data);
      if (res.statusText !== "OK") return;
      toast.success("Your Profile is Edited Successfully!");
    } catch (error) {
      setServerErrors(error.response.data.error);
    }
    setLoading(false);
  };
  const initialValues = {
    first_name: user?.first_name ? user.first_name : "",
    last_name: user?.last_name ? user.last_name : "",
    email: user?.email ? user.email : "",
    address: user?.address ? user.address : "",
    phone: user?.phone ? user.phone : "",
  };
  const formValidation = yup.object().shape({
    first_name: yup.string().required("first name is required"),
    last_name: yup.string().required("last name is required"),
    email: yup.string().email().required("enter a valid email"),
    address: yup.string().required("address is required"),
    phone: yup.string().length(11).required("enter a valid number"),
  });

  return (
    <CustomProfileContainer nav={"/profile/edit"}>
      <Box my={2}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={formValidation}
          enableReinitialize={true}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <FormCard
              serverErrors={serverErrors}
              loading={loading}
              handleSubmit={handleSubmit}
            >
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

              <ImageFileUpload
                image={user?.image}
                label={"Profile Image"}
                add={add}
                editable={true}
                setAdd={setAdd}
                resetImageFile={resetUserProfile}
                handleImageUpload={(e) => handleUserImageUpload(e)}
                imageFileerror={userImageFileError}
              />
              {add && <ImageFileDisplay imageFile={userImageFile} />}
              <ImageFileUpload
                image={user?.nationalIdImage}
                label={"National Id Image"}
                handleImageUpload={(e) => handleNationalIdImage(e)}
                imageFileerror={nationalIdFileError}
                add={nationalIdAdd}
                editable={true}
                setAdd={setNationalIdAdd}
                resetImageFile={resetNationalDFile}
              />
              {<ImageFileDisplay imageFile={nationalIdFile} />}

              <FormButton theme={theme}>Save</FormButton>
            </FormCard>
          )}
        </Formik>
      </Box>
    </CustomProfileContainer>
  );
}

export default EditProfile;
