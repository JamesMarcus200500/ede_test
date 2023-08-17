import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

const LessonsLeftSide = ({ setBatch }) => {
  const [openAcc, setOpenAccc] = useState(true || "courses");

  const handleExpend = (isExpend, panel) => {
    setOpenAccc(isExpend ? panel : false);
    // console.log(isExpend, panel);
  };
  return (
    <Stack gap={3} width={400}>
      <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "25px" }}>
        <Typography fontSize={18}>Achieve your goals in English</Typography>
        <Typography fontSize={12}>Beginner Level</Typography>
      </Box>
      <Stack gap={2}>
        <Accordion
          onChange={(e, isExpend) => handleExpend(isExpend, "courses")}
          expanded={openAcc === "courses"}
        >
          <AccordionSummary>
            <KeyboardArrowDown
              sx={{ mr: 2 }}
              style={{
                transform: `rotate(${openAcc === "courses" ? "0" : "-90"}deg)`,
              }}
            />
            Course Material
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              {[1, 2, 3].map((index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                      marginLeft: 5,
                    }}
                    onClick={() => setBatch("week" + index)}
                  >
                    {" "}
                    Week {index}
                  </Box>
                );
              })}
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion
          onChange={(e, isExpend) => handleExpend(isExpend, "quests")}
          expanded={openAcc === "quests"}
        >
          <AccordionSummary>
            <KeyboardArrowDown
              sx={{ mr: 2 }}
              style={{
                transform: `rotate(${openAcc === "quests" ? "0" : "-90"}deg)`,
              }}
            />{" "}
            Quests
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              {[1, 2, 3].map((index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <ArrowRightIcon /> Week {index}
                  </Box>
                );
              })}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default LessonsLeftSide;
