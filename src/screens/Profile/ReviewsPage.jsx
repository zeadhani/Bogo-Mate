import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ReviewItem from "../../components/UI/profile/ReviewItem";
import CustomPagination from "../../components/UI/Global/Pagination";
import useUserReviews from "../../hooks/user/useUserReviews";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import authFetch from "../../service/interceptors";
import { toast } from "react-toastify";

function ReviewsPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {
    count,
    handleChangePage,
    isError,
    isLoading,
    page,
    reviews,
    rowsPerPage,
    getData,
  } = useUserReviews();
  const handleDeleteReview = (id) => {
    return async () => {
      try {
        const req = await authFetch.delete(`/review/${id}`);
        if (req.status === 200) {
          getData();
          toast.success("Deleted");
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
    <CustomProfileContainer nav={"/profile/reviews"} title={"Reviews"}>
      <Box my={2}>
        {reviews?.length === 0 ? (
          <Typography textAlign={"center"} variant="h4" mt={2}>
            You don't have any reviews
          </Typography>
        ) : (
          <>
            <Grid container spacing={1}>
              {reviews?.map((item) => (
                <Grid item key={item.id} xs={12}>
                  <ReviewItem
                    review={item}
                    matches={matches}
                    handleDeleteReview={handleDeleteReview}
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
          </>
        )}
      </Box>
    </CustomProfileContainer>
  );
}

export default ReviewsPage;
