import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";

function ContactUsItem({ item, isReplied, handleDeleteMessage }) {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{ cursor: "pointer", "&:hover": { bgcolor: "transparent" } }}
        disableGutters
      >
        <ListItemAvatar>
          <Avatar
            src={`${process.env.REACT_APP_CLOUDINARY}${item.Users?.image}`}
          />
        </ListItemAvatar>

        <ListItemText
          sx={{
            overflow: "hidden",
            maxWidth: "70%",
            maxHeight: "100px",
          }}
          primary={
            <Box display={"flex"} gap={2}>
              <Typography
                component="span"
                variant="body2"
                color={isReplied ? "limegreen" : "red"}
              >
                {isReplied ? "Replied" : "Not Replied"}
              </Typography>
              <Typography component="span" variant="caption">
                {moment(item.createdAt).format("MMMM D, YYYY")}
              </Typography>
            </Box>
          }
          secondary={<>{` — ${item.message} `}</>}
        />

        <ListItemSecondaryAction>
          <IconButton size="small" onClick={handleDeleteMessage(item.id)}>
            <DeleteOutline />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ContactUsItem;
