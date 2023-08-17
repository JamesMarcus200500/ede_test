import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonPrimary({
  type,
  children,
  width,
  height,
  textColor,
  size,
  id,
  disabled,
}) {
  return (
    <Button
      variant="contained"
      type={type}
      size={size}
      disabled={disabled}
      sx={{
        boxShadow: " 0px 0px 11px -4px rgba(0, 0, 0, 0.31)",
        background: "#42AAFF",
        borderRadius: "30px",
        width: width,
        height: height,
        textTransform: "capitalize",
        fontSize: "0.938rem",
        fontWeight: 700,
        fontFamily: "Raleway",
      }}
      // disableFocusRipple={true}
      // disableRipple={true}
      id={id}
    >
      {children}
    </Button>
  );
}
