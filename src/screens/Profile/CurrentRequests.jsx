import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import useUserCurrentRequests from "../../hooks/user/useUserCurrentRequests";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";

function CurrentRequests() {
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
//   const {
//     count,
//     handleChangePage,
//     isError,
//     isLoading,
//     page,
//     products,
//     rowsPerPage,
//   } = useUserCurrentRequests({ email });
//   console.log({ products, count });
//   if (isError) {
//     return <Error />;
//   }
//   if (isLoading && !isError) {
//     return <LoadingData />;
//   }
  return (
    <CustomProfileContainer nav={"/profile/orders"} title={"Requests"}>
      <Box my={2}>zzz</Box>
    </CustomProfileContainer>
  );
}

export default CurrentRequests;
