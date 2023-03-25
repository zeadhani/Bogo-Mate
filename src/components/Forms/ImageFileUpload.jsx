import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  FormHelperText,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageFileUpload({
  label,
  handleImageUpload,
  imageFileerror,
  add,
  image,
  editable,
  setAdd,
  resetImageFile,
}) {
  const triggerAdd = () => {
    setAdd((prev) => !prev);
    if (!add) {
      resetImageFile();
    }
  };
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <Typography display={"flex"} alignItems={"center"}>
          {label}
        </Typography>
        {editable && (
          <Button
            disableRipple
            variant="text"
            color={add ? "error" : "success"}
            onClick={triggerAdd}
            sx={{ height: "40px" }}
          >
            {add ? "Dismiss" : "Change"}
          </Button>
        )}
      </Stack>
      {add && (
        <>
          <input
            accept="image/*"
            hidden
            id={label}
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor={label}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>

          {imageFileerror && (
            <FormHelperText error>{imageFileerror}</FormHelperText>
          )}
        </>
      )}
      {!add && (
        <LazyLoadImage
          width={80}
          style={{ borderRadius: 5 }}
          src={`${process.env.REACT_APP_CLOUDINARY}${image}`}
        />
      )}
    </Stack>
  );
}

export default ImageFileUpload;
