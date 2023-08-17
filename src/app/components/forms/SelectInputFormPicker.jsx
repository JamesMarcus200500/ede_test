import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function SelectInputFormPicker(props) {
  const { value, onChange, options, field, touched, errors } = { ...props };
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl sx={{ minWidth: '100%' }}>
        <InputLabel htmlFor="demo-dialog-native">Courses</InputLabel>
        <Select
          native
          value={value}
          onChange={onChange}
          placeholder="Courses"
          //input={<OutlinedInput label="Courses" id="demo-dialog-native" />}
          sx={{
            borderRadius: "30px",
            bgcolor: "#62A8E3"
          }}
        >
          <option aria-label="Courses" value="" />
          {
            options.map(option =>
              <option value={option.id} key={option.id}>{option.course_name}</option>
            )}
        </Select>
      </FormControl>
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
    </Box>
  );
}