import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box, List, Typography, useMediaQuery, useTheme } from "@mui/material";
import ContactUsItem from "../../components/UI/profile/contactUsItem";
import { toast } from "react-toastify";
import authFetch from "../../service/interceptors";

import useUserMessages from "../../hooks/user/messages/useUserMessages";
import CustomPagination from "../../components/UI/Global/Pagination";
import RepliedFilter from "../../components/UI/profile/repliedFilter";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";

function MessagesPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    count,
    getData,
    handleChangePage,
    handleRepliedFilterChange,
    isError,
    isLoading,
    messages,
    page,
    repliedArray,
    resetContactUsFilter,
    repliedFilter,
    rowsPerPage,
  } = useUserMessages();
  const handleDeleteMessage = (id) => {
    return async () => {
      try {
        const res = await authFetch.delete(`/contactus/${id}`);
        if (res.status === 200) {
          getData();
          toast.success("Message Deleted!");
        }
      } catch (error) {
        toast.error("Failed to Delete");
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
    <CustomProfileContainer nav={"/profile/messages"} title={"Messages"}>
      <Box my={2}>
        <RepliedFilter
          handleRepliedFilterChange={handleRepliedFilterChange}
          repliedArray={repliedArray}
          repliedFilter={repliedFilter}
          resetContactUsFilter={resetContactUsFilter}
        />
        <List>
          {messages?.length === 0 ? (
            <Typography textAlign={"center"} variant="h4" mt={2}>
              You don't have any messages
            </Typography>
          ) : (
            messages?.map((row, index) => {
              const isReplied = row?.replied;
              return (
                <ContactUsItem
                  key={row.id}
                  item={row}
                  isReplied={isReplied}
                  handleDeleteMessage={handleDeleteMessage}
                />
              );
            })
          )}
        </List>
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

export default MessagesPage;
