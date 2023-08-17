import { Box, Stack } from "@mui/material";
import React from "react";

const UserRoleOption = ({ regType, toggler }) => {
  return (
    <Stack
      direction="row"
      width="280px"
      height={44}
      boxSizing="border-box"
      position="relative"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="6px"
      mb={2}
      bgcolor="#62A8E2"
      borderRadius="30px"
      overflow="hidden"
    >
      <Box
        width="48%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="30px"
        height="100%"
        sx={{
          transition: "background .2s ease-in",
          cursor: "pointer",
          color: regType === "student" ? "#217FCE" : "#FFF",
        }}
        bgcolor={regType === "student" ? "#FFF" : "transparent"}
        component="div"
        onClick={() => toggler("student")}
      >
        Student
      </Box>
      <Box
        width="48%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="30px"
        height="100%"
        sx={{
          transition: "background .2s ease-in",
          cursor: "pointer",
          color: regType === "teacher" ? "#217FCE" : "#FFF",
        }}
        bgcolor={regType === "teacher" ? "#FFF" : "transparent"}
        component="div"
        onClick={() => toggler("teacher")}
      >
        Teacher
      </Box>
    </Stack>
  );
};

export default UserRoleOption;
