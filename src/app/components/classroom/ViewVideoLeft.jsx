import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const ViewVideoLeft = () => {
  return (
    <Box
      sx={{
        p: 3,
        width: "380px",
        borderRadius: "25px",
        border: "1px solid #ccc",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          //  textTransform: "capitalize"
        }}
      >
        Achieve your goals in English
      </Typography>
      <Typography variant="p">Beginner Level</Typography>

      <Stack gap={2} mt={3}>
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ccc",
                p: 1,
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <PlayCircleFilledWhiteIcon /> Introduction to the Care ...
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ViewVideoLeft;
