/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import svg from "../../../../images/AbstractPaper.svg";
import { colors } from "../../../../Theme";
const image =
  "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg";
function HomeAboutSection({matches}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:matches?"column":"row",
        my: 3,
        backgroundImage: `url(${svg})`,
        color: "#f5f5f5",
      }}
    >
      <Box>
        <img
          src={image}
          style={{
            height: "100%",
            width: "100%",
            objectFit:"cover"
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <Typography variant="h4">Welcome to BOGO</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          ultrices sapien. Nulla nec velit metus. Nullam aliquet, risus ac
          tempus malesuada, felis sapien molestie felis, nec laoreet elit elit
          non turpis.
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 2, bgcolor: colors.grey[100],color:"#222" }}
        >
          Learn more
        </Button>
      </Box>
    </Box>
  );
}

export default HomeAboutSection;
