import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import useUser from "../../hooks/user/useUser";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import { Edit, Lock, Logout } from "@mui/icons-material";

import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { authActions } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userData = useSelector((state) => state.Auth.user);
  const email = userData.replace(/"/g, "");
  const { data, isLoading, isError } = useUser({ email });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    return () => {
      navigate(`${nav}`);
    };
  };
  const handleLogout = () => {
    dispatch(authActions.Logout());
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile"}>
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
        <Button
          startIcon={<Edit />}
          color="primary"
          onClick={handleNavigate("/profile/edit")}
        >
          Edit Profile
        </Button>

        <Button
          startIcon={<Lock />}
          color="primary"
          onClick={handleNavigate("/profile/changepass")}
        >
          Change Password
        </Button>

        <Button startIcon={<Logout />} color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </CustomProfileContainer>
  );
};

export default ProfilePage;
