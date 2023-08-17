import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";

const DateTimePickerField = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoItem label={props.label}>
        <DateTimePicker
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "30px",
            },
            "& .MuiInputBase-root > input": {
              padding: "16px 20px",
            },
          }}
          value={props.value}
          onChange={props.onChange}
          views={["year", "day", "hours", "minutes", "seconds"]}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default DateTimePickerField;
