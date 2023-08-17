import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ItemAsGridChild from "../components/ItemAsGridChild";
import { motion } from "framer-motion";
import MuiAccordion from "../components/MuiAccordion";
import { useState } from "react";

export default function FaqsUi() {
  //demo faq data
  const [expended, setExpended] = useState(false);

  const faqsData = [
    {
      id: 1,
      question: "How to make a cake?1",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
    {
      id: 2,
      question: "How to make a cake?2",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
    {
      id: 3,
      question: "How to make a cake?3",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
    {
      id: 4,
      question: "How to make a cake?4",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit .Explicabo cum quis aspernatur necessitatibus est maiores volupta dolorum suscipit saepe dolor.",
    },
  ];
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px"
      }}
    >
      <Grid item xs={12}>
        <ItemAsGridChild>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
            mb={8}
          >
            Most frequently asked questions
          </Typography>
        </ItemAsGridChild>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          gap: 8,
        }}
      >
        <Stack
          sx={
            {
              // borderRadius: 3,
              // overflow: "hidden",
            }
          }
          gap={2}
          component={motion.div}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, type: "tween" }}
          viewport={{ once: true }}
        >
          {faqsData.map((faq, index) => {
            if (index % 2 === 0) {
              return (
                <MuiAccordion
                  faq={faq}
                  key={faq.id}
                  expended={expended}
                  setExpended={setExpended}
                />
              );
            }
          })}
        </Stack>

        <Stack
          gap={2}
          component={motion.div}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {faqsData.map((faq, index) => {
            if (index % 2 !== 0) {
              return (
                <MuiAccordion
                  faq={faq}
                  key={faq.id}
                  expended={expended}
                  setExpended={setExpended}
                />
              );
            }
          })}
        </Stack>
      </Box>
    </Container>
  );
}
