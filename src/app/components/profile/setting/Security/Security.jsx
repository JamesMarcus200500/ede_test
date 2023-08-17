"use client";
import {
  Typography,
  Stack,
  Divider,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  Box,
} from "@mui/material";
import React from "react";

import SettingSubTitle from "../SettingSubTitle";
import ButtonTransparent from "@/app/components/ButtonTransparent";

const Security = () => {
  return (
    <Stack>
      <SettingSubTitle title="Security" />
      <Typography
        variant="subtitle1"
        fontSize="16px"
        fontWeight={500}
        py={1}
        sx={{ color: "#6A86ED" }}
      >
        Edit your account settings and change your password here.
      </Typography>
      <Divider />
      <Stack direction="column" gap={1} my={2} component="form">
        <Box width="50%">
          {/* <SettingInputTextBox
            label="New Phone Number"
            type="text"
            placeholder="Enter your new phone number"
          /> */}
        </Box>
        <Box width="100px" my={1}>
          {/*  <SettingButton label="Update" onClick={() => console.log("ph")} /> */}
        </Box>

        <Divider />
        <Typography
          variant="subtitle1"
          fontSize="16px"
          lineHeight="normal"
          fontWeight={500}
          py={1}
          sx={{ color: "#6A86ED" }}
        >
          We will send an OTP to your phone number when changing your password.
        </Typography>
      </Stack>
      <Stack gap={1.5} direction="column">
        <Box width="50%">
          {/* <SettingInputTextBox
            label="Current Password"
            placeholder="Enter your current password"
            type="text"
          /> */}
        </Box>
        <Box width="50%">
          {/* <SettingInputTextBox
            label="New Password"
            placeholder="Enter your new password"
            type="text"
          /> */}
        </Box>
        <Box width="50%">
          {/* <SettingInputTextBox
            label="New Confirm Password"
            placeholder="Enter your new confirm password"
            type="text"
          /> */}
        </Box>

        <Box width="100px" my={1}>
          <ButtonTransparent
            border="1px solid #c8c8c8"
            fontSize="14px"
            fontWeight={500}
            sticky={false}
            type="submit"
          >
            Update
          </ButtonTransparent>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Security;
