import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import useUserCurrentRequests from "../../hooks/user/useUserCurrentRequests";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import RequestItem from "../../components/UI/profile/orders/RequestItem";
import CustomPagination from "../../components/UI/Global/Pagination";
import authFetch from "../../service/interceptors";
import { toast } from "react-toastify";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_API_URL);
function CurrentRequests() {
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    count,
    handleChangePage,
    isError,
    isLoading,
    page,
    products,
    rowsPerPage,
    getData,
  } = useUserCurrentRequests({ email });

  const handleDeleteRequest = (id, offerId) => {
    return async (e) => {
      try {
        const req = await authFetch.delete(`/request/${id}`);
        if (req.status === 200) {
          socket.emit("add_request", { message: offerId });
          getData();
          toast.success("Pool Exited");
          return;
        }
      } catch (err) {
        toast.error("Failed");
      }
    };
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile/orders"} title={"Requests"}>
      <Box my={2}>
        <Grid container spacing={2}>
          {products?.map((item) => (
            <Grid item key={item.id} xs={12}>
              <RequestItem
                request={item}
                handleDeleteRequest={handleDeleteRequest}
              />
            </Grid>
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

export default CurrentRequests;
