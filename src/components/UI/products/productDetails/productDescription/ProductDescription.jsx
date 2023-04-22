import { Box, Typography } from "@mui/material";
import React from "react";
import CustomRating from "./Rating";
import Attributes from "./Attributes";
import Requests from "./Requests";

function ProductDescription({
  name,
  brand,
  price,
  reviews,
  completedRequests,
  requestsLeft,
  hasAttributes,
  count,
  productItems,
  id,
  handleAttributeInStock,
  attributeInStock,
  setAttributeId,
}) {
  const reviewsCount = reviews?.length;
  const value = reviews?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );

  return (
    <Box px={2} pt={2}>
      <Box display={"flex"} gap={1} textTransform={"capitalize"} mb={1}>
        <Typography variant="h3" fontWeight={900}>
          {name}
        </Typography>
        <Typography variant="caption" gutterBottom alignSelf={"flex-end"}>
          -{brand}
        </Typography>
      </Box>
      <Box display={"flex"} gap={1}>
        <Typography variant="h6" gutterBottom>
          {price} EGP
        </Typography>
        {hasAttributes ? (
          <Typography
            variant="caption"
            gutterBottom
            alignSelf={"center"}
            color={
              !attributeInStock
                ? "#0288d1"
                : attributeInStock === "inStock"
                ? "green"
                : "red"
            }
            fontWeight={"bold"}
          >
            -
            {!attributeInStock
              ? "Choose Details"
              : attributeInStock === "inStock"
              ? `IN STOCK`
              : "OUT OF STOCK"}
          </Typography>
        ) : (
          <Typography
            variant="caption"
            gutterBottom
            alignSelf={"center"}
            color={count ? "green" : "red"}
            fontWeight={"bold"}
          >
            -{count > 0 ? `IN STOCK` : "OUT OF STOCK"}
          </Typography>
        )}
      </Box>

      <CustomRating reviewsCount={reviewsCount} value={value / reviewsCount} />
      {Boolean(hasAttributes) && (
        <Attributes
          prodcutAttributeValues={productItems}
          id={id}
          handleAttributeInStock={handleAttributeInStock}
          setAttributeId={setAttributeId}
        />
      )}
      <Requests
        completedRequests={completedRequests}
        requestsLeft={requestsLeft}
      />
    </Box>
  );
}

export default ProductDescription;
