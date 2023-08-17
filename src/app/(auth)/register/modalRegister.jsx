"use client";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

import React, { useState } from "react";
import UserRoleOption from "@/app/components/forms/UserRoleOption";
import StudentRegForm from "@/app/components/forms/StudentRegForm";
import TeacherRegForm from "@/app/components/forms/TeacherRegForm";

const ModalRegister = ({ open, handleClose, handleOpen }) => {
  const [regType, setRegType] = useState("student");
  const toggleRegType = (value) => setRegType(value);
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "30px",
          background: "#217FCE",
          position: "relative",
        },
      }}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        id="alert-dialog-slide-description"
        fontSize="40px"
        fontWeight={600}
        color="#FFF"
        textAlign="center"
      >
        Sign Up
      </DialogTitle>

      <DialogContent
        sx={{
          overflow: "hidden",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          gap: 1,
          px: 4,
        }}
      >
        <Grid container>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            display="flex"
            xs={12}
          >
            <UserRoleOption regType={regType} toggler={toggleRegType} />
          </Grid>
          {regType === "student" ? <StudentRegForm /> : <TeacherRegForm />}
        </Grid>
      </DialogContent>

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
          Already have an account?
        </Button>
      </Box>
    </Dialog>
  );
};

export default ModalRegister;
