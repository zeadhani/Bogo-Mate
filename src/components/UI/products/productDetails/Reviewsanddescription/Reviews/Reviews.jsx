import { Box, Divider } from "@mui/material";
import React from "react";
import ReviewItem from "./ReviewItem";

function Reviews() {
  return (
    <Box p={2}>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <>
          <ReviewItem
            key={index}
            comment={"Great Item "}
            name={"Zead Hani"}
            date={"10/5/2022"}
            rating={4}
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677278864/jlxrmnqwuenazqfa4uwj.jpg"
            }
          />
           <Divider />
          </>
        ))}
    </Box>
  );
}

export default Reviews;
