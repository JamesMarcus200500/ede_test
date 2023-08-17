"use client";
import { ChevronRight } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const GenderOptionField = (props) => {
  const { errors, touched, label, value, field, onChange } = {
    ...props,
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        bgcolor="#62A8E2"
        height="44px"
        border="1px solid #FFF"
        borderRadius="30px"
        overflow="hidden"
      >
        <Typography
          fontSize="14px"
          marginLeft="16px"
          color="white"
          fontWeight={400}
        >
          Gender
        </Typography>
        <ChevronRight fontSize="medium" sx={{ color: "white" }} />
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            sx={{
              color: "white",
              "&& span > .MuiSvgIcon-root": {
                width: "18px",
                height: "18px",
                color: "white",
              },
              "&& .MuiTypography-root": {
                fontSize: "14px",
              },
            }}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            sx={{
              color: "white",
              "&& span > .MuiSvgIcon-root": {
                width: "18px",
                height: "18px",
                color: "white",
              },
              "&& .MuiTypography-root": {
                fontSize: "14px",
              },
            }}
            value="male"
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
      </Stack>
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
};

export default GenderOptionField;
