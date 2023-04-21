import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box } from "@mui/material";

function OrdersHistory() {
  return (
    <CustomProfileContainer nav={"/profile/orders"} title={"Orders history"}>
      <Box my={2}></Box>
    </CustomProfileContainer>
  );
}

export default OrdersHistory;
