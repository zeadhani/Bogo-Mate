import React from "react";
import { Typography, Grid, Avatar, Box } from "@mui/material";
import svg from "../../images/image2.svg";
import CustomContainer from "../../components/UI/Global/CustomContainer";
const url =
  "https://res.cloudinary.com/df2862din/image/upload/v1677278864/jlxrmnqwuenazqfa4uwj.jpg";
const TEAM = [
  "Ahmed Essam",
  "Zead Hani",
  "Omar Hessuin",
  "Reem Ahmed",
  "Hager Khaled",
];
const AboutUsPage = () => {
  return (
    <CustomContainer nav={"/About us"}>
      <Box py={4}>
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We are a team of passionate individuals dedicated to providing the
          best online shopping experience.
        </Typography>
      </Box>

      <Box
        py={4}
        sx={{
          backgroundImage: `url(${svg})`,
          color: "#f5f5f5",
          borderRadius: "10px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom mb={5}>
          Meet Our Team
        </Typography>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems={"center"}
        >
          {TEAM.map((item, index) => (
            <Grid item key={index}>
              <Avatar
                src={url}
                sx={{ mx: "auto", height: "80px", width: "80px" }}
              />
              <Typography variant="subtitle1" align="center" mt={2}>
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box py={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Offers
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
          urna quis libero fringilla euismod. Sed malesuada augue eget bibendum
          feugiat. Praesent in lacus faucibus, eleifend ante sed, placerat urna.
          Nulla facilisi. Pellentesque mattis quam at tortor volutpat bibendum.
          Fusce sed pulvinar ex, vel blandit turpis. Nam bibendum interdum dui,
          vel congue quam varius in. Nulla auctor magna vitae ante iaculis, eu
          consectetur lorem dictum.
        </Typography>
      </Box>

      <Box py={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          For any questions or concerns, please email us at BogoMate@gmail.com
          or call us at 0101944562.
        </Typography>
      </Box>
    </CustomContainer>
  );
};

export default AboutUsPage;
