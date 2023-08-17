import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { Formik, Field, Form } from "formik";
import { isRequired } from "@/app/validators";
import RenderCircularProgress from "@/app/components/RenderCircularProgress";
import { useRouter } from "next/navigation";
import TextInput from "@/app/components/forms/TextInput";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  //bgcolor: 'background.paper',
  boxShadow: 0,
  textAlign: "center",
  borderRadius: 2,
  fontFamily: "Raleway",
};

export default function ModalRegister({ open, handleClose, handleOpen }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [user, setUser] = React.useState("");

  return (
    <>
      {/* <button onClick={handleOpen}>Open modal</button> */}
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
          <Box
            sx={{
              width: 745,
              height: 500,
              backgroundImage: "url(images/bgicon.png)",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {loading && (
              <Box display="flex" justifyContent="flex-end">
                <RenderCircularProgress size="1.5rem" />
              </Box>
            )}

            <Box
              sx={{
                width: 745,
                height: 500,
                backgroundImage: "url(images/bgicon.png)",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: 338,
                  height: 500,
                  bgcolor: "#217FCE",
                  padding: "34px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 5,
                  color: "#fff",
                  // alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Raleway", fontWeight: 600 }}
                >
                  Sign In
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify",
                    pr: "80px",
                    fontFamily: "Raleway",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ipsum maiores esse asperiores, dolores excepturi quod minus
                  iste! Itaque, error. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Amet ipsum maiores esse asperiores, dolores
                  excepturi quod minus iste! Itaque, error. Lorem ipsum dolor
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 304,
                  height: 339,
                  bgcolor: "#FDFDFD",
                  ml: -10,
                  borderRadius: "25px",
                  p: "34px",
                  position: "relative",
                }}
              >
                <Formik
                  initialValues={{ name: "", password: "", dob: "" }}
                  onSubmit={(values) => {
                    setLoading(true);
                    if (values !== null) {
                      onAuthStateChanged(auth, (currUser) => setUser(currUser));
                      if (user !== null) {
                        setLoading(false);
                        localStorage.setItem("verifiedUser", true);
                        console.log(user);
                        //localStorage.setItem('tokenId', user._tokenResponse.refreshToken);
                        router.push("/blog");
                      }
                    }
                    //register api call here
                  }}
                >
                  {(formikProps) => {
                    return (
                      <Form>
                        <Box
                          width={"90%"}
                          //sx={{ margin: 'auto',marginBottom: 4, width: '100%', padding: 0 }}
                          sx={style}
                        >
                          <Field
                            name="name"
                            type="text"
                            validate={isRequired}
                            height="35px"
                            value={formikProps.values.name}
                            onChange={formikProps.handleChange("name")}
                            onBlur={formikProps.handleBlur("name")}
                            component={TextInput}
                            placeholder="Enter your user name"
                            {...formikProps}
                          />
                          <Field
                            name="password"
                            type="password"
                            validate={isRequired}
                            height="35px"
                            value={formikProps.values.password}
                            onChange={formikProps.handleChange("password")}
                            onBlur={formikProps.handleBlur("password")}
                            component={TextInput}
                            placeholder="Enter your password"
                            {...formikProps}
                          />
                          <Field
                            name="dob"
                            type="text"
                            validate={isRequired}
                            height="48px"
                            value={formikProps.values.dob}
                            onChange={formikProps.handleChange("dob")}
                            onBlur={formikProps.handleBlur("dob")}
                            component={TextInput}
                            placeholder="Enter your Birthday"
                            {...formikProps}
                          />
                          <br />
                          <br />
                          {/* </Box>
                    <Box m="auto"> */}
                          <ButtonPrimary
                            type="submit"
                            //disabled={formikProps.isSubmitting}
                            size="large"
                            textColor="#fff"
                            width="142px"
                            height="48px"
                            lineHeight="48px"
                          >
                            {loading ? (
                              <RenderCircularProgress size="1.5rem" />
                            ) : (
                              " Log In"
                            )}
                          </ButtonPrimary>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
