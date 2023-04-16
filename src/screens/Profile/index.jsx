import {
  Avatar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useSelector } from "react-redux";
import useUser from "../../hooks/user/useUser";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import { ArrowBack, Edit, Lock, Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userData = useSelector((state) => state.Auth.user);
  const email = userData.replace(/"/g, "");
  const { data, isLoading, isError } = useUser({ email });
  const navigate = useNavigate();

  const matches = useMediaQuery("(max-width:800px)");
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
      {matches && (
        <Button
          variant="text"
          color="primary"
          onClick={handleGoBack}
          startIcon={<ArrowBack />}
          sx={{ mt: 1 }}
        >
          Go Back
        </Button>
      )}

      <Box my={1} mx={"auto"} width={"fit-content"}>
        <Avatar
          alt={"Profile-Image"}
          src={`${process.env.REACT_APP_CLOUDINARY}${data?.image}`}
          sx={{ width: 180, height: 180 }}
        />
      </Box>
      <Typography textAlign={"center"} variant="h3" textTransform={"uppercase"}>
        {data.first_name + " " + data.last_name}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        my={2}
      >
        <Typography variant="subtitle1" color="textSecondary">
          {data.email}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.phone}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.address}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button startIcon={<Edit />} color="primary">
          Edit Profile
        </Button>

        <Button startIcon={<Lock />} color="primary">
          Change Password
        </Button>

        <Button startIcon={<Logout />} color="secondary">
          Logout
        </Button>
      </Box>
    </CustomContainer>
  );
};

export default ProfilePage;
