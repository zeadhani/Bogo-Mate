import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ReviewItem from "./ReviewItem";
import moment from "moment";
function Reviews({ reviews }) {
  return (
    <Box p={2}>
      {reviews.length > 0 && (
        <>
          {reviews.map((item, index) => (
            <Box key={index}>
              <ReviewItem
                comment={item.comment}
                name={item.Users.first_name + " " + item.Users.last_name}
                date={moment(item.createdAt).format("YYYY-MM-DD")}
                rating={item.rating}
                image={`${process.env.REACT_APP_CLOUDINARY}${item.Users.image}`}
              />
              <Divider />
            </Box>
          ))}
        </>
      )}
      {reviews.length === 0 && (
        <Typography>No Reviews for this product</Typography>
      )}
    </Box>
  );
}

export default Reviews;
