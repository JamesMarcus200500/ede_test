import { Button } from "@mui/material";
import React from "react";

const SettingButton = ({ label, onClick, props }) => {
  return (
    <Button
      variant="outlined"
      style={{
        padding: "8px 32px",
        border: "1px solid #c8c8c8",
        borderRadius: "41px",
        textTransform: "initial",
      }}
      {...props}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SettingButton;
