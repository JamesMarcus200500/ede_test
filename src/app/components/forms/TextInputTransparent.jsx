"use client";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function TextInputTransparent(props) {
  const { errors, touched, label, type, field, placeholder } = {
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
            color: "#454545",
          },
        }}
        sx={{
          "& fieldset": {
            border: "none",
          },
          "&& .MuiInputBase-root ": {
            border: "1px solid #C8C8C8",
            borderRadius: "15px",
            bgcolor: "transparent",
          },
          height: 44,
        }}
      />
      {errors[field["name"]] && touched[field["name"]] && (
        <Typography variant="h6" fontSize="13px" pl={2} sx={{ color: "red" }}>
          {errors[field.name]}
        </Typography>
      )}
    </>
  );
}
