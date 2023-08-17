import React, { useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import RenderCircularProgress from "@/app/components/RenderCircularProgress";
import RenderOTPInput from "@/app/components/forms/otpInput";
import { isRequired } from "@/app/validators";
import { Alert, Box, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { firebaseError } from "@/app/custom";

export default function FormVeriyOTP({
  error,
  setError,
  setOpenSnakBar,
  handleRegModalOpen,
}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  return (
    <Box alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ verifyOTP: "" }}
        onSubmit={({ verifyOTP }) => {
          setLoading(true);
          handleRegModalOpen(true);
          return;
          try {
            window.confirmationResult
              .confirm(verifyOTP)
              .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                handleRegModalOpen(true);
              })
              .catch((error) => {
                // User couldn't sign in (bad verification code?)
                setError(error.message);
                setLoading(false);
                setOpenSnakBar(true);
              });
          } catch (error) {
            console.log("error section hit", error.message);
            setError(error.message);
            setLoading(false);
            setOpenSnakBar(true);
          }
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <Box display="flex" width={530}>
                <Box
                  m="auto"
                  sx={{
                    margin: "auto",
                    background: "#fff",
                    padding: "2px",
                    borderRadius: "30px",
                    width: "350px",
                    height: "48px",
                  }}
                >
                  <Field
                    name="verifyOTP"
                    validate={isRequired}
                    height="48px"
                    value={formikProps.values.verifyOTP}
                    onChange={formikProps.handleChange("verifyOTP")}
                    onBlur={formikProps.handleBlur("verifyOTP")}
                    component={RenderOTPInput}
                    {...formikProps}
                  />
                </Box>
                <Box m="auto">
                  <ButtonPrimary
                    type="submit"
                    disabled={error == "Token is expired"}
                    size="large"
                    textColor="#fff"
                    width="142px"
                    height="48px"
                    lineHeight="48px"
                  >
                    {loading ? (
                      <RenderCircularProgress size="1.5rem" />
                    ) : (
                      "Verify"
                    )}
                  </ButtonPrimary>
                </Box>
              </Box>
              {/* {error.message && <Stack sx={{ width: '400px', marginTop: '4px' }}>
                <Alert severity='error'>{firebaseError(error.message)}</Alert>
              </Stack>} */}
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
