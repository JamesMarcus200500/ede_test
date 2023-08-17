import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import RenderOTPInput from "@/app/components/forms/otpInput";
import { Formik, Field, Form } from "formik";
import { isRequired } from "@/app/validators";
import RenderCircularProgress from "@/app/components/RenderCircularProgress";
import { useRouter } from "next/navigation";
import { Alert, Stack, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 0,
  p: 4,
  textAlign: "center",
  borderRadius: 2,
};

export default function ModalOTP({
  open,
  handleClose,
  handleOpen,
  setSentOTP,
}) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading && (
            <Box display="flex" justifyContent="flex-end">
              <RenderCircularProgress size="1.5rem" />
            </Box>
          )}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "Raleway",
              marginBottom: "20px",
            }}
          >
            Enter Verification Code
          </Typography>

          <Formik
            initialValues={{ verifyCode: "" }}
            onSubmit={({ verifyCode }) => {
              setLoading(true);
              window.confirmationResult
                .confirm(verifyCode)
                .then((result) => {
                  // User signed in successfully.
                  const user = result.user;
                  localStorage.setItem(
                    "tokenId",
                    result._tokenResponse.refreshToken
                  );
                  setLoading(false);
                  setSentOTP(false);
                  router.push("/");
                })
                .catch((err) => {
                  // User couldn't sign in (bad verification code?)
                  // ...
                  setError(err);
                });
            }}
          >
            {(formikProps) => {
              return (
                <Form>
                  <Box
                    m="auto"
                    sx={{ margin: "auto", padding: "2px", marginBottom: 4 }}
                  >
                    <Field
                      name="verifyCode"
                      validate={isRequired}
                      height="48px"
                      value={formikProps.values.verifyCode}
                      onChange={formikProps.handleChange("verifyCode")}
                      onBlur={formikProps.handleBlur("verifyCode")}
                      component={RenderOTPInput}
                      {...formikProps}
                    />
                  </Box>
                  {error.message == "Firebase: Error (auth/code-expired)." ? (
                    <Stack
                      sx={{
                        width: "100%",
                        background: "cyan",
                        marginTop: "-40px",
                      }}
                      spacing={2}
                    >
                      <Alert severity="error">{"Token Expired!"}</Alert>
                    </Stack>
                  ) : (
                    ""
                  )}
                  <Box m="auto">
                    <ButtonPrimary
                      type="submit"
                      //disabled={formikProps.isSubmitting}
                      size="large"
                      textColor="#fff"
                      width="142px"
                      height="48px"
                      lineHeight="48px"
                    >
                      Verify
                    </ButtonPrimary>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
