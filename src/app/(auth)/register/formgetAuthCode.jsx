import React from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import RenderPhoneInput from "@/app/components/forms/phoneInputCustomSelect/RenderPhoneInput";
import { isRequired } from "@/app/validators";
import { Box } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../firebase";

export default function FormGetAuthCode({
  setLoading,
  setSentOTP,
  setError,
  setOpenSnakBar,
}) {
  return (
    <Box alignItems="center" justifyContent="center">
      <Formik
        initialValues={{ phone_no: "" }}
        //validationSchema={phoneSchema}
        onSubmit={async ({ phone_no }) => {
          let intlPhoneNo = "+95";
          intlPhoneNo += phone_no;
          setLoading(true);
          if (intlPhoneNo.slice(0, 4) !== "+959" || intlPhoneNo.length !== 13) {
            setError("Phone number is not valid");
            setOpenSnakBar(true);
          } else {
            try {
              window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {}
              );
              window.recaptchaVerifier.render();
              signInWithPhoneNumber(auth, intlPhoneNo, window.recaptchaVerifier)
                .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  // Object { verificationId: "AL3R4eRZbVB1OHa04AT-s5-ts0xpvosVKHqRT7cKby_0oGSvqDgjrTsWqvH9fGPwU5-ndrKfhaGvJ_f_YhfWqxTDmtq_8jhxgyt0FyNcZh60CIHTLwLgmopUqhtCUB7yH4irukKAht1fNda10aRlyAkS6-jboDEcLM9huvVDFiSrsZFA0as7i8jEn4_YMDo2cEvN8xVSuUubThO0s1Y5TXex_PbTOnu4lWLvd_WkQcfuYqVZ2t7BxI4", onConfirmation: signInWithPhoneNumber(cred) }
                  window.confirmationResult = confirmationResult;
                  setSentOTP(true);
                  setLoading(false);
                })
                .catch((error) => {
                  // Error; SMS not sent
                  // ...
                  //console.log(error.message);
                  setError(error.message);
                  setOpenSnakBar(true);
                });
            } catch (error) {
              //console.log(error.message);
              setError(error.message);
              setLoading(false);
              setOpenSnakBar(true);
            }
          }
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <Box display="flex" gap={3}>
                <Box
                  m="auto"
                  sx={{
                    margin: "auto",
                    background: "#42AAFF",
                    padding: "0px",
                    borderRadius: "30px",
                    width: "350px",
                    height: "48px",
                  }}
                >
                  <Field
                    name="phone_no"
                    validate={isRequired}
                    height="48px"
                    placeholder="Enter Your Phone Number"
                    value={formikProps.values.phone_no}
                    onChange={formikProps.handleChange("phone_no")}
                    //component={PhoneInputMultiCountry}
                    component={RenderPhoneInput}
                    {...formikProps}
                  />
                </Box>
                <Box m="auto">
                  <ButtonPrimary
                    type="submit"
                    disabled={formikProps.isSubmitting}
                    size="large"
                    textColor="#fff"
                    width="142px"
                    height="48px"
                    lineHeight="48px"
                  >
                    Get Started
                  </ButtonPrimary>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
