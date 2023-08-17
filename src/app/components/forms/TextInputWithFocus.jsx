"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";

function TextInputWithFocus(formikProps, ref) {
  const { type, field, placeholder, height, value } = { ...formikProps };
  /*
   * change mui placeholder fontFamily
   * https://stackoverflow.com/questions/64413949/reactjs-how-to-change-placeholder-font-size-of-material-ui-autocomplete
   */
  return (
    <>
      <TextField
        id="filled-multiline-flexible"
        placeholder={placeholder}
        type={type}
        variant="filled"
        {...field}
        // inputRef={(input) => {
        //   if (errors[field['name']] && touched[field['name']]) {
        //     input?.focus()
        //   }
        // }}
        inputRef={ref}
        autoFocus={false}
        InputProps={{
          disableUnderline: true,
          style: {
            WebkitBoxShadow: "none",
            background: "transparent",
          },
        }}
        sx={{
          boxShadow: "0px 0px 11px -4px rgba(0, 0, 0, 0.31)",
          backgroundColor: "#E8FBFE",
          borderRadius: "30px",
          "&& .MuiInputBase-input": {
            padding: "13px 5px 13px 20px",
            borderRadius: "30px",
            height: "22px",
          },
          // "& fieldset": { border: 'none',background:'blue' },
          "& .MuiFormLabel-root": {
            fontFamily: "Raleway",
          },
          border: "none",
          //"& fieldset": { border: 'none' },
          height: height,
        }}
        fullWidth={true}
      />
    </>
  );
}
export default React.forwardRef(TextInputWithFocus);
