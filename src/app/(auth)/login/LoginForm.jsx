import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import {
  isRequired,
  isEmail,
  isvalidPassword,
  isStrongPassword,
} from "@/app/validators";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Google } from "@mui/icons-material";
import TextInput from "@/app/components/forms/TextInput";
import { useRouter } from "next/navigation";
import api from "@/app/config/api";
import RenderCircularProgress from "@/app/components/RenderCircularProgress";
import ErrorAlert from "@/app/components/ErrorAlert";
import sha256 from "crypto-js/sha256";

const LoginForm = ({ open, setShowLoginDialog }) => {
  const [userRole, setUserRole] = useState("student");
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const toggleRole = (role) => {
    setUserRole(role);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setShowLoginDialog(false)}
      // fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "25px",
          background: "#217FCE",
          //width: "480px",
        },
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          const number = /[0-9]/;
          if (!values.password) {
            errors.password = "Password is required.";
          } else if (values.password.length < 8) {
            errors.password =
              "Password must have a minimum length of 8 characters.";
          } else if (!number.test(values.password)) {
            errors.password = "password must contain at least one number";
          }
          return errors;
        }}
        onSubmit={(values) => {
          // console.log({ role: userRole, ...values });
          setLoading(true);
          let formdata = new FormData();
          formdata.append("email", values.email);
          formdata.append("password", values.password);
          formdata.append("role", userRole);
          try {
            api.post(`/${userRole}/login`, formdata).then((res) => {
              if (session) {
                push(`/profile`);
              } else if (res.status == 200) {
                setLoading(false);
                localStorage.setItem("authTokenOwn", sha256(res.data.token));
                push(`/profile`);
                // push({
                //   pathname: '/profile',
                //   query: {name: userRole}
                // })
                setShowLoginDialog(false);
              } else if (res.status == 401) {
                setError("You are not authenticated!");
                setLoading(false);
              } else if (res.status == 500) {
                setError(res.error);
                setLoading(false);
              } else {
                setError("something went wrong!");
                setLoading(false);
              }
            });
          } catch (error) {
            setLoading(false);
            setError(error.message);
          }
        }}
      >
        {(formikProps) => {
          return (
            <Form>
              <Stack gap="18px" paddingX="106px" bgcolor="#217FCE">
                <DialogTitle
                  // textAlign="center"
                  // variant="h4"
                  // sx={{ color: "white", mb: 2 }}
                  fontSize="40px"
                  fontWeight={600}
                  color="#FFF"
                  textAlign="center"
                >
                  Login
                </DialogTitle>
                <Box
                  display="flex"
                  flexDirection="row"
                  // gap={2}
                  bgcolor="#62A8E2"
                  border="1px solid #FFF"
                  borderRadius="30px"
                  position="relative"
                  width="267px"
                  height={43}
                  mx="auto"
                  justifyContent="space-between"
                >
                  <Box
                    bgcolor="transparent"
                    onClick={() => toggleRole("student")}
                    px={2}
                    py={1}
                    width="110px"
                    component={motion.div}
                    sx={{
                      bgcolor: userRole === "student" && "#FFF",
                      borderRadius: "30px",
                      color: userRole === "student" ? "#217FCE" : "#FFF",
                      margin: 0.5,
                      cursor: "pointer",
                      transition: ".2s all ease-in-out ",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    Student
                  </Box>
                  <Box
                    bgcolor="transparent"
                    width="110px"
                    onClick={() => toggleRole("teacher")}
                    px={2}
                    py={1}
                    component={motion.div}
                    sx={{
                      bgcolor: userRole === "teacher" && "#FFF",
                      borderRadius: "25px",
                      color: userRole === "teacher" ? "#217FCE" : "#FFF",
                      margin: 0.5,
                      cursor: "pointer",
                      transition: ".2s all ease-in-out",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    Teacher
                  </Box>
                </Box>
                {/* <Button
                  startIcon={<Google />}
                  sx={{
                    bgcolor: "#62A8E2",
                    color: "white",
                    borderRadius: "25px",
                    height: "44px",
                    border: "1px solid white",
                  }}
                >
                  Continue With Google
                </Button>
                <Typography textAlign="center" sx={{ color: "white" }}>
                  Or
                </Typography>
 */}
                {userRole == "teacher" && (
                  <Box sx={{ width: "100%" }}>
                    <Button
                      startIcon={<Google />}
                      sx={{
                        bgcolor: "#62A8E2",
                        color: "white",
                        borderRadius: "25px",
                        height: "44px",
                        width: "100%",
                        border: "1px solid white",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        signIn("google", {
                          callbackUrl: `/profile`,
                        });
                      }}
                    >
                      Continue With Google
                    </Button>
                    <Typography
                      textAlign="center"
                      mt={1}
                      sx={{ color: "white" }}
                    >
                      Or
                    </Typography>
                  </Box>
                )}

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  component={TextInput}
                  validate={isEmail}
                  {...formikProps}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  component={TextInput}
                  validate={isRequired}
                  {...formikProps}
                />
                {error ? <ErrorAlert>{error}</ErrorAlert> : ""}
                {userRole == "teacher" ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("google", {
                        callbackUrl: `/profile/${sha256("userRole")}`,
                      });
                    }}
                  >
                    sign in with google
                  </button>
                ) : null}

                <Button
                  type="submit"
                  sx={{
                    width: "123px",
                    height: "44px",
                    borderRadius: "25px",
                    bgcolor: "#62A8E2",
                    color: "white",
                    border: "1px solid white",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  {loading ? <RenderCircularProgress size="1.5rem" /> : "Login"}
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
      <Box
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
      </Box>
    </Dialog>
  );
};

export default LoginForm;
