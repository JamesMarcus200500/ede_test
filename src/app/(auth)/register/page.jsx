"use client";
import React from "react";
import { Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { isEmail, isRequired } from "@/app/validators";
import TextInput from "@/app/components/forms/TextInput";

export default function Register() {
  return (
    <React.Fragment>
      <h2>Register</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <Field
                type="email"
                name="email"
                label="Email"
                component={TextInput}
                validate={isEmail}
                {...formikProps}
              />
              <Field
                type="password"
                name="password"
                label="Password"
                component={TextInput}
                validate={isRequired}
                {...formikProps}
              />
              <Button type="submit">Register</Button>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
