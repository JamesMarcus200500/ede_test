import { Box, Button, Stack } from "@mui/material";
import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useRouter } from "next/navigation";

const LessonsRightSide = ({ batch }) => {
  const router = useRouter();
  const data = batch == "week1" ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5];
  return (
    <Stack
      width="100%"
      border="1px solid #ccc"
      p={3}
      borderRadius="25px"
      gap={2}
    >
      {data.map((index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              p: 1,
              // px: 2,
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
              <PlayCircleFilledWhiteIcon /> Introduction to the Career
              Development Process
            </Box>
            {index == 1 && (
              <Button
                variant="outlined"
                sx={{ borderRadius: 3, width: 120, height: 40 }}
                style={{ padding: 0 }}
                onClick={() => router.push("/profile/classroom/grammer")}
              >
                Get Start
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default LessonsRightSide;
