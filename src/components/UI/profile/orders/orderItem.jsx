import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { useNavigate } from "react-router-dom";

function OrderItem({ order }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/profile/add-review/" + id);
  };
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        sx={{
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src={`${process.env.REACT_APP_CLOUDINARY}${order?.Product?.image}`}
          alt={order?.Product?.name}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Box sx={{ padding: "16px" }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "8px",
            }}
          >
            {order?.Product?.name}
          </Typography>

          <Typography variant="subtitle1" style={{ fontSize: "1rem" }}>
            {order.Product?.Brands?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ fontSize: "0.8rem" }}
          >
            {moment(order.createdAt).format("MMMM D, YYYY")}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ fontSize: "0.7rem" }}
                component={"del"}
                alignSelf={"center"}
              >
                {order?.Product?.price} EGP
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ fontSize: "1rem" }}
              >
                {Number(order?.price).toFixed(2)} EGP
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ bgcolor: "#222", color: "#f5f5f5" }}
              onClick={() => handleNavigate(order.id)}
            >
              Add Review
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default OrderItem;
