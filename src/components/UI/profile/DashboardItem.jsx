import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme";

function DashboardItem({ icon, title, subtitle, data, itemSize }) {
  return (
    <Grid item xs={itemSize}>
      <Box
        my={1}
        p={2}
        borderRadius={4}
        sx={{
          bgcolor: colors.grey[900],
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography variant="h6" sx={{ color: colors.grey[200] }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.grey[400] }}
          >
            {data}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default DashboardItem;
