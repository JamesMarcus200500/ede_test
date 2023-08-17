import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimePickerReact = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate)
  console.log(moment(startDate).format("YYYY-MM-DD hh:mm:ss"))
  console.log(moment(endDate).format("YYYY-MM-DD hh:mm:ss"))
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        showTimeSelect
        dateFormat="Pp"
      />
      <DatePicker
        selected={endDate}
        onChange={setEndDate}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="hh:mm:ss"
      />
    </>
  );
};
export default TimePickerReact;