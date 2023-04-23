import { ArrowForwardIosSharp, ExpandMore } from "@mui/icons-material";
import { Box, Button, Rating, Typography, styled } from "@mui/material";

import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "5px",
  backgroundColor: "white",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "5px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function ReviewItem({ review, matches, handleDeleteReview }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <LazyLoadImage
          alt="images"
          width={"50px"}
          src={`${process.env.REACT_APP_CLOUDINARY}${review?.Product?.image}`}
          style={{ objectFit: "contain", borderRadius: "5px" }}
        />
        <Typography
          ml={2}
          variant={matches ? "h5" : "h4"}
          textTransform={"capitalize"}
          fontWeight={800}
          alignSelf={"center"}
        >
          {review?.Product?.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Rating
            value={review?.rating}
            readOnly
            precision={0.5}
            size="medium"
          />
          <Typography variant="caption">
            {moment(review?.createdAt).format("MMMM D, YYYY")}
          </Typography>
        </Box>
        <Typography variant="h5" mt={1}>
          {review?.comment}
        </Typography>

        <Box marginLeft={"auto"} width={"fit-content"}>
          <Button
            sx={{
              bgcolor: "red",
              color: "whitesmoke",
              "&:hover": { bgcolor: "red" },
            }}
            size="small"
            onClick={handleDeleteReview(review?.id)}
          >
            Delete
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ReviewItem;
