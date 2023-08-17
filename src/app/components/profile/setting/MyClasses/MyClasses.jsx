import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import MyClassHook from "./MyClassHook";
import { Field, Form, Formik } from "formik";
import DateTimePickerField from "@/app/components/forms/DateTimePickerField";
import { dummyTable } from "@/app/utils/constant";
import { CSVLink } from "react-csv";
import SettingButton from "../SettingButton";

const MyClasses = () => {
  const {
    openCreateMeetingDialog,
    //action
    setOpenCreateMeetingDialog,
  } = MyClassHook();
  return (
    <>
      <Stack direction="column">
        <Typography fontSize="20px" fontWeight="700">
          Your Classes
        </Typography>
        <Stack
          direction="row"
          gap={4}
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <Button>CSV Download</Button> */}
          {/* <SettingButton
            label="Create Metting"
            onClick={() => setOpenCreateMeetingDialog(true)}
          /> */}
          <Box>
            <Image
              src="/images/classroom.png"
              width={38}
              height={32}
              alt="classroom"
            />
          </Box>
        </Stack>
        <Divider sx={{ borderColor: "#c8c8c8", my: 3 }} />
        <Stack m={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyTable.map((row) => (
                  <TableRow
                    key={row.firstName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>

        <Stack>
          <CSVLink data={dummyTable} filename={"student-report.csv"}>
            Export as CSV
          </CSVLink>
        </Stack>
      </Stack>

      {/* Dialog */}
      <Dialog
        open={openCreateMeetingDialog}
        fullWidth
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "30px",
          },
        }}
        onClose={() => setOpenCreateMeetingDialog(false)}
      >
        <DialogTitle
          fontSize="22px"
          style={{ padding: "32px" }}
          fontWeight={700}
        >
          Create Metting
        </DialogTitle>
        <DialogContent
          style={{
            padding: "0 32px 32px 32px ",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Formik
            initialValues={{
              startTime: null,
              endTime: null,
            }}
            onSubmit={(values) => {
              console.log(values);
              //register api call here
            }}
          >
            {(formikProps) => {
              return (
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Field
                    name="startTime"
                    type="date"
                    label="Start Time"
                    value={formikProps.values.startTime}
                    onChange={(newValue) =>
                      formikProps.setFieldValue("startTime", newValue)
                    }
                    component={DateTimePickerField}
                    {...formikProps}
                  />
                  <Field
                    name="endTime"
                    type="date"
                    label="End Times"
                    value={formikProps.values.endTime}
                    onChange={(newValue) =>
                      formikProps.setFieldValue("endTime", newValue)
                    }
                    component={DateTimePickerField}
                    {...formikProps}
                  />
                  <DialogActions
                    sx={{
                      mt: 4,
                    }}
                  >
                    <SettingButton label="Create" type="submit" />
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyClasses;
