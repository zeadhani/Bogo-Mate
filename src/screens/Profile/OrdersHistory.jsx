import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import useUserOrders from "../../hooks/user/useUserOrders";
import { useSelector } from "react-redux";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import CustomPagination from "../../components/UI/Global/Pagination";
import OrderItem from "../../components/UI/profile/orders/orderItem";

function OrdersHistory() {
  const userData = useSelector((state) => state.Auth.user);
  const email = userData.replace(/"/g, "");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    isError,
    isLoading,
    orders,
    handleChangePage,
    page,
    rowsPerPage,
    count,
  } = useUserOrders({ email });

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile/orders"} title={"Orders history"}>
      <Box my={2}>
        <Grid container spacing={3}>
          {orders.map((order) => (
            <OrderItem order={order} key={order.id} />
          ))}
        </Grid>
        <CustomPagination
          handleChangePage={handleChangePage}
          matches={matches}
          page={page}
          rowsPerPage={rowsPerPage}
          count={count}
        />
      </Box>
    </CustomProfileContainer>
  );
}

export default OrdersHistory;
