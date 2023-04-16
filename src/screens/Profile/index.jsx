import { Avatar, Box, Button, Slide, Typography } from "@mui/material";
import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useSelector } from "react-redux";
import useUser from "../../hooks/user/useUser";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import { ArrowBack, Edit, Lock, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userData = useSelector((state) => state.Auth.user);
  const email = userData.replace(/"/g, "");
  const { data, isLoading, isError } = useUser({ email });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomContainer nav={"profile"}>
      <Box my={1}>
        <Button
          variant="text"
          color="primary"
          onClick={handleGoBack}
          startIcon={<ArrowBack />}
        >
          Go Back
        </Button>
        <Avatar
          alt={"Profile-Image"}
          src={`${process.env.REACT_APP_CLOUDINARY}${data?.image}`}
          sx={{ width: 100, height: 100 }}
        />

        <Typography variant="h4" textTransform={"capitalize"}>
          {data.first_name + " " + data.last_name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.email}
        </Typography>

        <Button startIcon={<Edit />} color="primary">
          Edit Profile
        </Button>

        <Button startIcon={<Settings />} color="primary">
          Change Password
        </Button>

        <Button startIcon={<Lock />} color="secondary">
          Logout
        </Button>
      </Box>
    </CustomContainer>
  );
};

export default ProfilePage;
