import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import { isRequired } from "@/app/validators";
import DateTimePickerField from "../forms/DateTimePickerField";
import SelectInputFormPicker from "../forms/SelectInputFormPicker";
import DatePickerField from "../forms/DatePickerField";
import api from "@/app/config/api";
import { useSession } from "next-auth/react";
import moment from "moment";
import TimePickerMui from "../forms/TimePickerMui";
import TimePickerReact from "../TimePickerReact";

const CreateMeetingForm = ({ open, setOpen, courses }) => {
  let coursess = [
    { "course_name": "test" },
    { "course_name": "test2" }
  ]

  const { data } = useSession();
  // console.log(data)

  async function postJSON(data) {
    console.log("postJsoonfun ht")
    try {
      const response = await fetch("http://54.251.187.226/api/meeting/create", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data?.accessToken}`
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      // fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "25px",
          background: "#217FCE",

          width: "600px",
        },
      }}
    >
      <Formik
        initialValues={{ start_time: undefined, end_time: undefined, course_id: "", test_date_time: undefined, test_time: undefined }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          let formdata = new FormData();
          formdata.append("test_date_time", values.test_date_time);
          formdata.append("test_time", values.test_time);
          formdata.append("start_time", values.start_time);//"10:00:00"
          formdata.append("end_tiime", values.end_time);//"11:00:00"
          formdata.append("course_id", values.course_id);//"2"
          console.log(formdata)
          console.log("moment", moment(values.test_date_time).format("YYYY-MM-DD HH:mm:ss"))
          console.log("momentII", moment(values.test_date_time).format("LTS"))
          console.log("momentIII", moment(values.test_date_time).toISOString())
          console.log("momentIV=2023-08-17T10:00", moment(values.test_time).toISOString())
          console.log(moment(values.test_time).format("hh:mm:ss"))
          console.log(moment(values.test_date_time).format("hh:mm:ss"));
          console.log("moment", moment(values.start_time).format("YYYY-MM-DD HH:mm:ss"))
          //console.log(JSON.stringify(values))
          //
          console.log("bakend accepted format")
          console.log(values)
          try {
            api.post('/meeting/create', formdata, `${data?.accessToken}`).then(res => {
              console.log(res)
            })
            //postJSON(formdata)
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <Stack gap="18px" paddingX="106px" bgcolor="#217FCE">
                <DialogTitle
                  // sx={{ color: "white", mb: 2 }}
                  fontSize="40px"
                  fontWeight={600}
                  color="#FFF"
                  textAlign="center"
                >
                  Create Meeting
                </DialogTitle>
                <Field
                  name="test_date_time"
                  component={DateTimePickerField}
                  validate={isRequired}
                  value={formikProps.values.test_date_time}
                  onChange={(newValue) => {
                    formikProps.setFieldValue("test_date_time", newValue);
                  }}
                  {...formikProps}
                />
                <Field
                  name="test_time"
                  component={TimePickerMui}
                  validate={isRequired}
                  value={formikProps.values.test_time}
                  onChange={(newValue) => {
                    formikProps.setFieldValue("test_time", newValue)
                  }}
                  {...formikProps}
                />
                <TimePickerReact />
                <Field
                  name="start_time"
                  component={DatePickerField}
                  validate={isRequired}
                  value={formikProps.values.start_time}
                  onChange={(newValue) => {
                    formikProps.setFieldValue("start_time", newValue);
                  }}
                  {...formikProps}
                />
                <Field
                  name="end_time"
                  component={DatePickerField}
                  validate={isRequired}
                  value={formikProps.values.end_time}
                  onChange={(newValue) => {
                    formikProps.setFieldValue("end_time", newValue);
                  }}
                  {...formikProps}
                />
                <Field
                  type="text"
                  name="course_id"
                  placeholder="Courses"
                  component={SelectInputFormPicker}
                  //validate={isRequired}
                  options={courses}
                  value={formikProps.values.course_id}
                  onChange={formikProps.handleChange("course_id")}
                  {...formikProps}
                />
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "25px",
                    bgcolor: "#62A8E2",
                    color: "white",
                    border: "1px solid white",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  Crete Meeting
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
      {/*<Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={55}
        bgcolor="white"
      >
        <Button
          variant="text"
          sx={{
            textDecoration: "underline",
            textTransform: "initial",
            fontSize: "13px",
            color: "#217FCE",
          }}
        >
          Create an Account
        </Button>
      </Box>*/}
    </Dialog>
  );
};
export default CreateMeetingForm;