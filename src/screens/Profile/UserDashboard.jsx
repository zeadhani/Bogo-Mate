import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import DashboardItem from "../../components/UI/profile/DashboardItem";
import { MoneyOff } from "@mui/icons-material";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

function UserDashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomProfileContainer nav={"/profile/dashboard"} title={"Dashboard"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box my={1}>
            <Grid container spacing={2}>
              <DashboardItem
                icon={<MoneyOff sx={{ color: "white" }} />}
                title={"Money Spent"}
                subtitle={"zzz"}
                data={"100GP"}
                itemSize={isSmallScreen ? 12 : 6}
              />
              <DashboardItem
                icon={<MoneyOff sx={{ color: "white" }} />}
                title={"Money Spent"}
                subtitle={"zzz"}
                data={"100GP"}
                itemSize={isSmallScreen ? 12 : 6}
              />
              <DashboardItem
                icon={<MoneyOff sx={{ color: "white" }} />}
                title={"Money Spent"}
                subtitle={"zzz"}
                data={"100GP"}
                itemSize={isSmallScreen ? 12 : 6}
              />
              <DashboardItem
                icon={<MoneyOff sx={{ color: "white" }} />}
                title={"Money Spent"}
                subtitle={"zzz"}
                data={"100GP"}
                itemSize={isSmallScreen ? 12 : 6}
              />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </CustomProfileContainer>
  );
}

export default UserDashboard;
