import { Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import TextInput from "./TextInput";
import AutoCompleteTextInput from "./AutoCompleteTextInput";
import DatePickerField from "./DatePickerField";
import GenderOptionField from "./GenderOptionField";
import ButtonPrimary from "../ButtonPrimary";
import { studentRegValidation } from "@/app/validators";
import { regions } from "@/app/utils/constant";

const StudentRegForm = () => {
  return (
    <Formik
      initialValues={{
        regionId: "",
        username: "",
        password: "",
        cpassword: "",
        dob: null,
        gender: null,
        address: "",
      }}
      validationSchema={studentRegValidation}
      onSubmit={(values) => {
        console.log(values);
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
                  name="regionId"
                  type="number"
                  height="35px"
                  value={
                    formikProps.values.regionId
                      ? regions.find(
                          (region) =>
                            region.regionId === formikProps.values.regionId
                        )?.regionName
                      : null
                  }
                  component={AutoCompleteTextInput}
                  onChange={(event, value) => {
                    const selectedRegion = regions.find(
                      (region) => region.regionName === value
                    );
                    const regionId = selectedRegion
                      ? selectedRegion.regionId
                      : "";
                    formikProps.setFieldValue("regionId", regionId);
                  }}
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
                  name="dob"
                  height="35px"
                  value={formikProps.values.dob}
                  onChange={(newValue) => {
                    formikProps.setFieldValue("dob", newValue);
                  }}
                  component={DatePickerField}
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

export default StudentRegForm;
