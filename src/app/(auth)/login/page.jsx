"use client";

import LoginForm from "./LoginForm";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <LoginForm />
    </Box>
  );
};

export default page;
