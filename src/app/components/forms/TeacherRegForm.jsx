import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { Grid } from "@mui/material";
import TextInput from "./TextInput";
import GenderOptionField from "./GenderOptionField";
import { Field, Form, Formik } from "formik";
import { teacherRegValidation } from "@/app/validators";

const TeacherRegForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        cpassword: "",
        gender: null,
        address: "",
        phoneNumber: null,
        email: null,
      }}
      validationSchema={teacherRegValidation}
      onSubmit={(values) => {
        console.log(values, "teacher");
        //register api call here
      }}
    >
      {(formikProps) => {
        return (
          <Form>
            <Grid container spacing={2.5}>
              <Grid item xs={6}>
                <Field
                  name="username"
                  type="text"
                  height="35px"
                  value={formikProps.values.username}
                  onChange={formikProps.handleChange("username")}
                  onBlur={formikProps.handleBlur("username")}
                  component={TextInput}
                  placeholder="Enter your username"
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="email"
                  type="email"
                  height="35px"
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange("email")}
                  onBlur={formikProps.handleBlur("email")}
                  component={TextInput}
                  placeholder="Enter your email"
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="password"
                  type="password"
                  height="35px"
                  value={formikProps.values.password}
                  onChange={formikProps.handleChange("password")}
                  onBlur={formikProps.handleBlur("password")}
                  component={TextInput}
                  placeholder="Enter your password"
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="cpassword"
                  type="password"
                  height="35px"
                  value={formikProps.values.cpassword}
                  onChange={formikProps.handleChange("cpassword")}
                  onBlur={formikProps.handleBlur("cpassword")}
                  component={TextInput}
                  placeholder="Enter your cureent password"
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="phoneNumber"
                  type="tel"
                  height="35px"
                  value={formikProps.values.phoneNumber}
                  onChange={formikProps.handleChange("phoneNumber")}
                  onBlur={formikProps.handleBlur("phoneNumber")}
                  component={TextInput}
                  placeholder="Contact Number"
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="gender"
                  type="radio"
                  height="35px"
                  value={formikProps.values.gender}
                  onChange={(event) =>
                    formikProps.setFieldValue("gender", event.target.value)
                  }
                  component={GenderOptionField}
                  {...formikProps}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="address"
                  type="text"
                  // validate={isRequired}
                  height="35px"
                  value={formikProps.values.address}
                  onChange={formikProps.handleChange("address")}
                  onBlur={formikProps.handleBlur("address")}
                  component={TextInput}
                  placeholder="Enter your address"
                  {...formikProps}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ButtonPrimary
                  type="submit"
                  //disabled={formikProps.isSubmitting}
                  size="large"
                  textColor="#fff"
                  width="142px"
                  height="48px"
                  lineHeight="48px"
                >
                  Sign up
                </ButtonPrimary>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TeacherRegForm;
