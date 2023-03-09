import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  FastForwardOutlined,
  HeadsetOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";

const experienceData = [
  {
    icon: <FastForwardOutlined />,
    title: "Fast Shipping",
    description:
      "We offer fast and reliable shipping options to get your products to you as quickly as possible.",
  },
  {
    icon: <HeadsetOutlined />,
    title: "Customer Support",
    description:
      "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.",
  },
  {
    icon: <MonetizationOnOutlined />,
    title: "Affordable Prices",
    description:
      "We offer competitive prices on all of our products, so you can get what you need without breaking the bank.",
  },
  {
    icon: <MonetizationOnOutlined />,
    title: "Affordable Prices",
    description:
      "We offer competitive prices on all of our products, so you can get what you need without breaking the bank.",
  },
];
function OtherData({ matches }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        direction={matches ? "row" : "column"}
      >
        {experienceData.map((data, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {data.icon}
                <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                  {data.title}
                </Typography>
                <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                  {data.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OtherData;
