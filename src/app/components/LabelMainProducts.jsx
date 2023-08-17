import { Typography } from "@mui/material";
import React from "react";

export default function LabelMainProducts({ children }) {
  return (
    <Typography
      mt={4}
      sx={{
        color: "#454545",
        textAlign: "center",
        fontFamily: "Raleway",
        fontsize: "25px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
      }}
    >
      {children}
    </Typography>
  );
}
