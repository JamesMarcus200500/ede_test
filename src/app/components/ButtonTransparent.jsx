import * as React from "react";
import Button from "@mui/material/Button";
import { Raleway } from "next/font/google";

export const raleway = Raleway({
  weight: "600",
  subsets: ["latin"],
});

export default function ButtonTransparent({
  children,
  size,
  textColor,
  width,
  height,
  border,
  fontWeight,
  sticky,
  fontSize,
  onClick,
}) {
  return (
    <Button
      variant="raised"
      size={size}
      // disableRipple={true}
      // disableFocusRipple={true}
      className={raleway.className}
      sx={{
        border: border,
        color: textColor,
        borderRadius: "30px",
        width: width,
        height: height,
        textTransform: "capitalize",
        fontSize: fontSize,
        "&:hover": { backgroundColor: "transparent" },
        fontWeight: fontWeight,
        fontFamily: "Raleway",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
