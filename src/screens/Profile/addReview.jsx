import React from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import {
  Box,
  Grid,
  LinearProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useSingleOrder from "../../hooks/orders/useSingleOrder";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import FormButton from "../../components/Forms/FormButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import authFetch from "../../service/interceptors";

function AddReview() {
  const { id } = useParams();
  const { isError, isLoading, order } = useSingleOrder({ id });
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewError, setReviewError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleRatingChange = (event, newValue) => {
    if (ratingError) {
      setRatingError(false);
    }
    setRating(newValue);
  };

  const handleReviewChange = (event) => {
    if (reviewError) {
      setReviewError(false);
    }
    setReview(event.target.value);
  };
  const handleSubmitReview = async () => {
    if (!rating) {
      setRatingError(true);
      return;
    }
    if (!review) {
      setReviewError(true);
      return;
    }
    setLoading(true);
    try {
      await authFetch.post(`/review/${order.Product.name}`, {
        rating: Number(rating),
        comment: review,
        email,
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        navigate(-1);
      }, 2000);
    } catch (error) {
      toast.error("Failed");
    } finally {
      setLoading(false);
    }
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile/orders"} title={"Add Review"}>
      {!isSubmitted && (
        <>
          {loading && (
            <Box sx={{ width: "100%", my: 1 }}>
              <LinearProgress />
            </Box>
          )}
          <Grid container spacing={2} my={2}>
            <Grid item xs={12}>
              <LazyLoadImage
                alt="images"
                width={"300px"}
                src={`${process.env.REACT_APP_CLOUDINARY}${order?.Product?.image}`}
                style={{ objectFit: "contain", borderRadius: "5px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h3" textTransform={"capitalize"}>
                  {order?.Product?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  textTransform={"capitalize"}
                  mt={1}
                >
                  {order?.Product?.Brands?.name}
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle1">Rating:</Typography>
                  <Rating
                    name="rating"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                  {ratingError && (
                    <Box>
                      <Typography variant="subtitle2" color={"red"}>
                        Please add rating
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  label="Please Write your Review..."
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  error={reviewError}
                  value={review}
                  onChange={handleReviewChange}
                  helperText={reviewError ? "Please write a Review" : ""}
                />
              </Box>
              <FormButton action={handleSubmitReview}>Submit Review</FormButton>
            </Grid>
          </Grid>
        </>
      )}
      {isSubmitted && (
        <Box textAlign="center" mt={6}>
          <Typography variant="h4">Thank You!</Typography>
          <Typography variant="body1">We appreciate your feedback.</Typography>
        </Box>
      )}
    </CustomProfileContainer>
  );
}

export default AddReview;
