"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiAccordion from "../components/MuiAccordion";
import { motion } from "framer-motion";

const Page = () => {
  const [expended, setExpended] = useState(false);
  const faqsData = [
    {
      id: 1,
      question: "How to make a cake?",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
    {
      id: 2,
      question: "How to make a cake?",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${"/images/bgiconlight.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 6,
      }}
    >
      <Typography textAlign="center" variant="h3">
        Most frequently asked questions
      </Typography>
      <Box display="flex" gap="20px" marginY={5}>
        <Box
          sx={
            {
              // borderRadius: 3, overflow: "hidden"
            }
          }
          component={motion.div}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {faqsData.map((faq) => {
            return (
              <MuiAccordion
                faq={faq}
                key={faq.id}
                expended={expended}
                setExpended={setExpended}
              />
            );
          })}
        </Box>
        <Box
          sx={
            {
              // borderRadius: 3,
              // overflow: "hidden",
            }
          }
          component={motion.div}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {faqsData.map((faq) => {
            return (
              <MuiAccordion
                faq={faq}
                key={faq.id}
                expended={expended}
                setExpended={setExpended}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
