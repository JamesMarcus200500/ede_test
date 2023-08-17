"use client";
import React, { useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Grid,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";

import { CameraAltOutlined } from "@mui/icons-material";
import ProfileHook from "./ProfileHook";
import Image from "next/image";

import SettingSubTitle from "../SettingSubTitle";

import { Field, Form, Formik } from "formik";
import TextInput from "@/app/components/forms/TextInput";
import DatePickerField from "@/app/components/forms/DatePickerField";
import { regions } from "@/app/utils/constant";
import ButtonTransparent from "@/app/components/ButtonTransparent";
import TextInputTransparent from "@/app/components/forms/TextInputTransparent";
import AutoCompleteTextInput from "@/app/components/forms/AutoCompleteTextInput";

const EditProfile = () => {
  const { handleImageUpload, profileImgUploaderRef, uploadedImage, imageFile } =
    ProfileHook();
  return (
    <Formik
      initialValues={{
        username: "",
        useremail: null,
        phoneNo: null,
        address: "",
        birthday: null,
        regionId: null,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => {
        return (
          <Form>
            <SettingSubTitle title="Profile Setting" />
            <Box
              p={2}
              mt={2}
              display="flex"
              justifyItems="flex-start"
              alignItems="center"
              borderRadius="25px"
              border="1px solid #c8c8c8"
              gap={4}
              background="#F8F8F8"
              width="60%"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100px"
                height="100px"
                borderRadius="50%"
                bgcolor="#c8c8c8"
                sx={{ cursor: "pointer" }}
                component="div"
                overflow="hidden"
                onClick={() => profileImgUploaderRef.current.click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  name="File[0]"
                  ref={profileImgUploaderRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                {imageFile ? (
                  <Image
                    src={localStorage.getItem("profileImg") || imageFile}
                    width={100}
                    height={100}
                    objectFit="cover"
                    ref={uploadedImage}
                    alt="profile"
                  />
                ) : (
                  <CameraAltOutlined fontSize="large" sx={{ color: "#FFF" }} />
                )}
              </Box>
              <Stack direction="column">
                <Typography fontSize="19px" fontWeight={700}>
                  Your Avatar
                </Typography>
                <Typography fontSize="14px" fontWeight={300}>
                  PNG or JPG no bigger than 1MB.
                </Typography>
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />

            <SettingSubTitle title="Personal Details" />
            <Stack direction="column" gap={2}>
              <Stack direction="row" spacing={6}>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    User name
                  </Typography>
                  <Field
                    name="username"
                    type="text"
                    value={formikProps.values.username}
                    onChange={formikProps.handleChange("username")}
                    onBlur={formikProps.handleBlur("username")}
                    component={TextInputTransparent}
                    placeholder="Enter your username"
                    {...formikProps}
                  />
                </Box>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    User Email
                  </Typography>
                  <Field
                    name="useremail"
                    type="email"
                    value={formikProps.values.useremail}
                    onChange={formikProps.handleChange("useremail")}
                    onBlur={formikProps.handleBlur("useremail")}
                    component={TextInputTransparent}
                    placeholder="Enter your email"
                    {...formikProps}
                  />
                </Box>
              </Stack>
              <Stack direction="row" gap={6}>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    Phone Number
                  </Typography>
                  <Field
                    name="phoneNo"
                    type="tel"
                    value={formikProps.values.useremail}
                    onChange={formikProps.handleChange("phoneNo")}
                    onBlur={formikProps.handleBlur("phoneNo")}
                    component={TextInputTransparent}
                    placeholder="Enter your Phone"
                    {...formikProps}
                  />
                </Box>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    Address
                  </Typography>
                  <Field
                    name="address"
                    type="text"
                    value={formikProps.values.address}
                    onChange={formikProps.handleChange("address")}
                    onBlur={formikProps.handleBlur("address")}
                    component={TextInputTransparent}
                    placeholder="Enter your address"
                    {...formikProps}
                  />
                </Box>
              </Stack>
              <Stack direction="row" gap={6}>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    Birthday
                  </Typography>
                  <Field
                    name="dob"
                    type="date"
                    value={formikProps.values.dob}
                    onChange={(newValue) => {
                      formikProps.setFieldValue("dob", newValue);
                    }}
                    component={DatePickerField}
                    {...formikProps}
                  />
                </Box>
                <Box width="35%">
                  <Typography ml={1} mb={0.5} fontSize="16px" fontWeight={500}>
                    Regions
                  </Typography>
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
                </Box>
              </Stack>
              <Box width="160px" my={1}>
                <ButtonTransparent
                  border="1px solid #c8c8c8"
                  fontSize="14px"
                  fontWeight={500}
                  sticky={false}
                  type="submit"

                  // onClick={() => console.log("profile")}
                >
                  Update Profile
                </ButtonTransparent>
              </Box>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditProfile;
