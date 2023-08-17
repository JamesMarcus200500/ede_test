"use client";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const UserRoleSelectField = (props) => {
  return (
    <RadioGroup
      row
      aria-labelledby="controlled-user-role-buttons-group"
      name="controlled-user-role-radio-buttons-group"
      value={props.value}
      onChange={props.onChange}
      style={{
        position: "relative",
        width: "280px",
        height: "45px",
        background: "#62A8E2",
        borderRadius: "30px",
        overflow: "hidden",
      }}
      sx={{
        "& .MuiButtonBase-root": {
          display: "none",
        },
      }}
    >
      <FormControlLabel
        style={{
          left: 0,
          position: "absolute",
          margin: "7px",
          background: props.value === "student" && "#FFF",
          color: props.value === "student" && "#217FCE",
          padding: "4px 8px",
          borderRadius: "30px",
          width: "100px",
          justifyContent: "center",
        }}
        value="student"
        control={<Radio />}
        label="Student"
      />
      <FormControlLabel
        style={{
          right: 0,
          position: "absolute",
          margin: "7px",
          background: props.value === "teacher" && "#FFF",
          color: props.value === "teacher" && "#217FCE",
          padding: "4px 8px",
          borderRadius: "30px",
          width: "100px",
          justifyContent: "center",
        }}
        value="teacher"
        control={<Radio />}
        label="Teacher"
      />
    </RadioGroup>
  );
};

export default UserRoleSelectField;
