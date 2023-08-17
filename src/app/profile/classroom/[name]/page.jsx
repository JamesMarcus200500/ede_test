"use client";
import ViewVideoLeft from "@/app/components/classroom/ViewVideoLeft";
import ViewVideoRight from "@/app/components/classroom/ViewVideoRight";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import Link from "next/link";

const page = ({ params }) => {
  return (
    <Container sx={{ paddingY: 5 }}>
      <Breadcrumbs separator={<NavigateNextIcon />}>
        <Link href="/profile" style={{ textDecoration: "none" }}>
          Classroom
        </Link>
        <Link href="/profile/classroom" style={{ textDecoration: "none" }}>
          Introduction to bar nyar
        </Link>
        <Typography> {params.name}</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 3,
          p: 3,
        }}
      >
        <ViewVideoLeft />
        <ViewVideoRight />
      </Box>
    </Container>
  );
};

export default page;
