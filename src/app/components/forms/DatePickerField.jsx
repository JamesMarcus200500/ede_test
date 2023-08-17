"use client";
import { Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { usePathname } from "next/navigation";

const DatePickerField = (props) => {
  const pathname = usePathname();

  //console.log(pathname, "curr");
  const { errors, touched, label, value, field, onChange } = {
    ...props,
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        value={value}
        onChange={onChange}
        sx={{
          bgcolor: pathname === "/" ? "#62A8E2" : "transparent",
          overflow: "hidden",
          borderColor: pathname === "/" ? "#FFF" : "#c8c8c8",
          border: "1px solid",
          borderRadius: pathname === "/" ? "30px" : "15px",
          "& .MuiButtonBase-root": {
            color: pathname === "/" ? "#FFF" : "#454545",
            paddingRight: "10px",
          },
          "& fieldset": {
            border: "none",
          },
          "& .MuiInputBase-root > input": {
            height: 11,
            pr: 12,
            borderRadius: "30px",
            color: pathname === "/" ? "#FFF" : "#454545",
            fontSize: "14px",
          },
        }}
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
    </LocalizationProvider>
  );
};

export default DatePickerField;
