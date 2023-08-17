"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import AboutCard from "../components/about/AboutCard";

export default function page() {
  return (
    <>
      <Box>
        <Typography
          textAlign="center"
          variant="h3"
          fontWeight="bolder"
          sx={{
            // backgroundImage: `url(${"/images/bgiconlight.png"})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            py: 3,
          }}
        >
          About Us
        </Typography>
        <Typography textAlign="center" variant="h6" my={5} fontWeight="bold">
          Here are more details about the platform and its features
        </Typography>

        <AboutCard />
        <AboutCard index={true} />
      </Box>
    </>
  );
}
