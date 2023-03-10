import { TextField } from "@mui/material";
import { Field } from "formik";
import React from "react";

function CustomTextField(props) {
  const {
    label,
    name,
    type,
    children,
    errors,
    disabled,
    touched,
    select = false,
    variant,
  } = props;

  return (
    <Field
      name={name}
      type={type}
      as={TextField}
      variant={variant || "filled"}
      label={label}
      fullWidth
      error={Boolean(errors) && Boolean(touched)}
      helperText={Boolean(touched) && errors}
      disabled={disabled}
      select={select}
      sx={{ bgcolor: "#d3d3d3", borderRadius: "5px", color: "#222" }}
      InputLabelProps={{
        style: {
          color: "#222",
        },
      }}
    >
      {children}
    </Field>
  );
}

export default CustomTextField;
