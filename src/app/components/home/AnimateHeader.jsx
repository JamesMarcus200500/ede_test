import { child, container } from "@/app/utils/constant";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const AnimateHeader = ({
  text,
  fontSize,
  fontWeight = 400,
  visibleX = 0,
  visibleY = 0,
  hiddenX = 0,
  hiddenY = 0,
}) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0.5 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.01 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: visibleX,
      y: visibleY,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: hiddenX,
      y: hiddenY,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        background:
          "linear-gradient(101deg, #42AAFF 0%, #217FCE 46.15%, #42AAFF 100%)",
        WebkitBackgroundClip: "text",
        fontSize: fontSize,
        fontFamily: "Raleway",
        fontWeight: fontWeight,
      }}
      component={motion.div}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <Typography
          variant="span"
          variants={child}
          component={motion.span}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </Typography>
      ))}
    </Box>
  );
};

export default AnimateHeader;
