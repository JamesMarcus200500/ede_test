"use client";

import Explain from "@/app/components/products/detail/Explain";
import CourseCard from "@/app/components/products/detail/CourseCard";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Page({ params }) {
  const [section, setSection] = useState("7 pm to 8 pm");
  return (
    <Box p={5} sx={{ background: "#E9F8FF" }}>
      <Box
        display="flex"
        gap={5}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Explain setSection={setSection} section={section} />
        <CourseCard section={section} />
      </Box>
      detail page {params.productId}
    </Box>
  );
}
