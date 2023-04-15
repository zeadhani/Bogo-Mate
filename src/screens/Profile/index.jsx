import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";

const ProfilePage = () => {
  return (
    <CustomContainer nav={"profile"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Avatar
            alt="Profile Picture"
            src="/path/to/profile-picture.jpg"
            sx={{ width: 12, height: 12, marginBottom: 2 }}
          />
          <Typography variant="h6" fontWeight={"bold"}>
            John Doe
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h5">Profile Information</Typography>
            <Typography variant="body1">Name: John Doe</Typography>
            <Typography variant="body1">Email: johndoe@example.com</Typography>
            <Typography variant="body1">Phone: +1 123 456 7890</Typography>
            <Typography variant="body1">
              Address: 1234 Elm Street, Springfield
            </Typography>
            <Typography variant="body1">Country: United States</Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default ProfilePage;
