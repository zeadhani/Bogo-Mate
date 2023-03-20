import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";

function ReviewItem({ name, image, date, rating, comment }) {
  return (
    <Box sx={{ my: 1 }}>
      <Box display={"flex"}>
        <Avatar alt={name} src={image} style={{ marginRight: "1rem" }} />
        <Box width={"100%"}>
          <Typography variant="h6" fontWeight={700}>
            {name}
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Rating value={rating} readOnly precision={0.5} size="small"/>
            <Typography
              variant="caption"
              style={{ color: "#888", alignSelf: "end" }}
            >
              {date}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
        {comment}
      </Typography>
    </Box>
  );
}

export default ReviewItem;
