"use client";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export default function ItemAsGridChild({ children, onClick }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    fontFamily: "Raleway",
  }));
  return <Item onClick={onClick}>{children}</Item>;
}
