"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function TextInput(props) {
  const { errors, touched, label, type, field, placeholder, height } = {
    ...props,
  };
  return (
    <>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        variant="outlined"
        {...field}
        fullWidth={true}
        inputProps={{
          style: {
            fontSize: "14px",
            padding: "12px 15px",
            color: "#FFF",
          },
        }}
        sx={{
          "& fieldset": {
            border: "none",
          },
          "&& .MuiInputBase-root ": {
            border: "1px solid #FFF",
            borderRadius: "30px",
            bgcolor: "#62A8E3",
          },
          height: 44,
        }}
      />
      {errors[field["name"]] && touched[field["name"]] && (
        <Typography
          variant="h6"
          fontSize="13px"
          pl={2}
          sx={{ color: "#ffc107" }}
        >
          {errors[field.name]}
        </Typography>
      )}
    </>
  );
}
