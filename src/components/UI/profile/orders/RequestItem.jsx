import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Requests from "../../Global/Requests";
import useRequests from "../../../../hooks/global/useRequests";

function RequestItem({ request, handleDeleteRequest }) {
  const matches = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const handleNavigate = (brand, item) => () => {
    navigate(`/shop/${brand}/${item}`);
  };
  const product = {
    offers: request.offers,
  };
  const { completedRequests, requestsLeft } = useRequests({ product });
  return (
    <Box
      sx={{
        borderRadius: "5px",
        paddingX: 2,
        paddingY: 1,
        cursor: "pointer",
        height: "100%",
        display: "flex",
        gap: 2,
      }}
      bgcolor={"#f5f5f5"}
    >
      <LazyLoadImage
        alt="images"
        width={"100px"}
        src={`${process.env.REACT_APP_CLOUDINARY}${request?.Product?.image}`}
        style={{ objectFit: "contain", borderRadius: "5px" }}
        onClick={handleNavigate(
          request?.Product?.Brands?.name,
          request?.Product?.name
        )}
      />
      <Box flex={1}>
        <Typography
          textAlign={"left"}
          variant={matches ? "h5" : "h4"}
          textTransform={"capitalize"}
          fontWeight={800}
          alignSelf={"center"}
          onClick={handleNavigate(
            request?.Product?.Brands?.name,
            request?.Product?.name
          )}
        >
          {request?.Product?.name}
        </Typography>

        <Typography
          textAlign={"left"}
          variant={matches ? "h6" : "h5"}
          textTransform={"capitalize"}
        >
          {request?.Product?.Brands?.name}
        </Typography>
        <Typography textAlign={"left"} variant={matches ? "body1" : "h6"}>
          {request?.Product?.price} EGP
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Requests
            completedRequests={completedRequests}
            requestsLeft={requestsLeft}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "red",
              alignSelf: "flex-end",
              textTransform: "capitalize",
            }}
            size="small"
            onClick={handleDeleteRequest(request?.id, request?.offerId)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RequestItem;
