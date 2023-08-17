import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Typography } from '@mui/material';

export default function TimePickerMui(props) {
  const { value, onChange, field, touched, errors } = { ...props };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['TimePicker']}>  */}
        <TimePicker
          value={value}
          onChange={onChange}
          label="Basic time picker" />
       {/* </DemoContainer>  */}
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
    </LocalizationProvider>
  );
}