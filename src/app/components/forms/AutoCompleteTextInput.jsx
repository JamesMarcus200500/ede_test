"use client";
import { regions } from "@/app/utils/constant";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const AutoCompleteTextInput = (props) => {
  const pathname = usePathname();
  const { errors, touched, label, value, field, onChange } = {
    ...props,
  };
  return (
    <>
      <Autocomplete
        sx={{
          "& .MuiOutlinedInput-root": {
            padding: "4px 10px",
          },
          "& fieldset": {
            border: "none",
          },
          bgcolor: pathname === "/" ? "#62A8E3" : "transparent",
          borderColor: pathname === "/" ? "#FFF" : "#c8c8c8",
          border: "1px solid",
          borderRadius: pathname === "/" ? "30px" : "15px",
          input: {
            fontSize: "14px",
            color: pathname === "/" ? "#FFF" : "#484848",
          },
          "& .MuiButtonBase-root": {
            color: pathname === "/" ? "#FFF" : "#484848",
          },
        }}
        value={value}
        onChange={onChange}
        options={regions?.map((region) => region.regionName)}
        renderInput={(params) => (
          <TextField placeholder="Regions" {...params} />
        )}
      />
      {errors[field["name"]] && touched[field["name"]] && (
        <Typography
          variant="h6"
          fontSize="13px"
          pl={2}
          sx={{ color: pathname === "/" ? "#ffc107" : "red" }}
        >
          {errors[field.name]}
        </Typography>
      )}
    </>
  );
};

export default AutoCompleteTextInput;
