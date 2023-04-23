import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
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
            <Typography
              sx={{
                display: "inline",
              }}
              component="span"
              variant="body2"
              color={isReplied ? "limegreen" : "red"}
            >
              {isReplied ? "Replied" : "Not Replied"}
            </Typography>
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
