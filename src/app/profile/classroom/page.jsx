"use client";
import LessonsLeftSide from "@/app/components/classroom/LessonsLeftSide";
import LessonsRightSide from "@/app/components/classroom/LessonsRightSide";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { useState } from "react";

const ClassPage = () => {
  const [batch, setBatch] = useState("week1");
  console.log(batch);
  return (
    <Box paddingY={5}>
      <Container>
        <Breadcrumbs separator={<NavigateNextIcon />} sx={{ mb: 3 }}>
          <Link href="/profile" style={{ textDecoration: "none" }}>
            Classroom
          </Link>
          <Typography>Grammer</Typography>
        </Breadcrumbs>
        <Stack direction="row" gap={5}>
          <LessonsLeftSide setBatch={setBatch} />
          <LessonsRightSide batch={batch} />
        </Stack>
      </Container>
    </Box>
  );
};

export default ClassPage;
