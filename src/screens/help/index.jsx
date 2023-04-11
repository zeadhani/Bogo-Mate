import {
  AccountCircle,
  ExpandMore,
  LocalShipping,
  Loyalty,
  Mail,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useNavigate } from "react-router-dom";

function HelpPage() {
  const navigate = useNavigate();
  const handleNavigate = (nav) => {
    return () => {
      navigate("/" + nav);
    };
  };
  return (
    <CustomContainer nav={"/help"}>
      <Box my={2}>
        <Typography variant="h6" mb={1}>
          Help Categories
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={handleNavigate("profile")}
            >
              <CardContent>
                <AccountCircle fontSize="medium" color="primary" />
                <Typography variant="h6">Account & Settings</Typography>
                <Typography variant="body2">
                  Get help with your account settings, password, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={handleNavigate("orders")}
            >
              <CardContent>
                <LocalShipping fontSize="medium" color="primary" />
                <Typography variant="h6">Order & Shipping</Typography>
                <Typography variant="body2">
                  Learn about orders, shipping, returns, and cancellations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={handleNavigate("About us")}
            >
              <CardContent>
                <Loyalty fontSize="medium" color="primary" />
                <Typography variant="h6">Brands & Offers</Typography>
                <Typography variant="body2">
                  Find information about brand offers and connecting with
                  brands.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={handleNavigate("contact-us")}
            >
              <CardContent>
                <Mail fontSize="medium" color="primary" />
                <Typography variant="h6">Contact Us</Typography>
                <Typography variant="body2">
                  Contact us for any further assistance or inquiries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box my={2}>
        <Typography variant="h6" mb={1}>
          FAQs
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1">
              How can I create a new contract with your brand?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              To create a new contract with our brand, you can go to the Contact
              Us area and send us an email with your proposal. Our team will
              review your request and get back to you as soon as possible.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1">
              How do I use the platform to submit a request and join an offer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              To submit a request and join an offer on our platform, you can
              fill in the necessary details in the offer request form and click
              on the Submit button. Your request will be automatically
              processed, and you will need to wait for other users to join your
              offer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </CustomContainer>
  );
}

export default HelpPage;
