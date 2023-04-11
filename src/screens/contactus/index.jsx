import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authFetch from "../../service/interceptors";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [messageError, setMessageError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const useData = useSelector((state) => state.Auth.user);
  const email = useData.replace(/"/g, "");

  const handleChange = (e) => {
    if (messageError) {
      setMessageError(false);
    }
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      setMessageError(true);
      return;
    }
    try {
      await authFetch.post("/contactus", { email, message });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("Failed to send!");
    }
  };

  return (
    <CustomContainer nav={"/contact-us"}>
      {!isSubmitted && (
        <>
          <Typography variant="h4" mb={2}>
            Contact Us
          </Typography>
          <Typography variant="body1" mb={1}>
            We'd love to hear from you! If you have any questions, comments, or
            feedback about our platform or brand offers, please fill out the
            form below and we'll get back to you as soon as possible.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              onChange={handleChange}
              error={messageError}
              helperText={messageError ? "Please write a message" : ""}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </form>
          <Box my={4}>
            <Typography variant="body1">
              Our brand is committed to providing top-notch customer support. We
              value your feedback and will do our best to respond to your
              inquiries as quickly as possible. Thank you for choosing our
              platform!
            </Typography>
          </Box>
        </>
      )}
      {isSubmitted && (
        <Box textAlign="center" mt={6}>
          <Typography variant="h4">Thank You!</Typography>
          <Typography variant="body1">We appreciate your feedback.</Typography>
        </Box>
      )}
    </CustomContainer>
  );
};

export default ContactUsPage;
