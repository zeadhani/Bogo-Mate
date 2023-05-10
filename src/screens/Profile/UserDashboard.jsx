import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import DashboardItem from "../../components/UI/profile/DashboardItem";
import {
  Favorite,
  MoneyOff,
  ShoppingBag,
  StarRate,
  TimerSharp,
} from "@mui/icons-material";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import useDahboardData from "../../hooks/user/useDahboardData";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";

function UserDashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    currentRequests,
    favoriteBrand,
    isError,
    isLoading,
    moneySpent,
    totalOrders,
    totalReviews,
  } = useDahboardData();

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile/dashboard"} title={"Dashboard"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} mb={5} mt={1}>
            <DashboardItem
              icon={<MoneyOff sx={{ color: "white" }} />}
              title={"Money Spent"}
              subtitle={"Total amount of money spent on purchases"}
              data={moneySpent + " EGP"}
              itemSize={isSmallScreen ? 12 : 6}
            />
            <DashboardItem
              icon={<ShoppingBag sx={{ color: "white" }} />}
              title={"Total Orders"}
              subtitle={"Number of completed orders"}
              data={totalOrders + " Orders"}
              itemSize={isSmallScreen ? 12 : 6}
            />
            <DashboardItem
              icon={<TimerSharp sx={{ color: "white" }} />}
              title={"Current Requests"}
              subtitle={"Number of current requests being processed"}
              data={currentRequests + " Requests"}
              itemSize={isSmallScreen ? 12 : 6}
            />
            <DashboardItem
              icon={<StarRate sx={{ color: "white" }} />}
              title={"Total Reviews"}
              subtitle={"Number of reviews made for purchases"}
              data={totalReviews + " Reviews"}
              itemSize={isSmallScreen ? 12 : 6}
            />
            {favoriteBrand && (
              <DashboardItem
                icon={<Favorite sx={{ color: "white" }} />}
                title={"Favorite Brand"}
                subtitle={"Most purchased brand "}
                data={favoriteBrand}
                itemSize={isSmallScreen ? 12 : 6}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </CustomProfileContainer>
  );
}

export default UserDashboard;
