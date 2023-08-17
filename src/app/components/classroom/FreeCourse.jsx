import React from "react";
import {
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useRouter } from "next/navigation";
// import { Router, useRouter } from "next/router";

const FreeCourse = () => {
  const router = useRouter();

  return (
    <Stack gap={3}>
      {[1, 2, 3].map((index) => {
        return (
          <Stack direction="row" height={115} gap={3} key={index}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={3}
              sx={{
                borderRadius: "25px",
                border: "1px solid #eee",
                paddingX: "14px",
                height: 115,
                width: "60%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    borderRadius: "15px",
                    width: 120,
                    height: 86,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    alt="next iamge"
                    src="/images/logo.png"
                    width="120"
                    height="86"
                  />
                </Box>
                <Box width="100%">
                  <Typography fontSize="18px" fontWeight="bold">
                    Basic English Lessons
                  </Typography>
                  <Typography mt={1}>Overall Progress</Typography>
                  <Stack
                    direction="row"
                    width="100%"
                    gap={2}
                    alignItems="center"
                  >
                    <LinearProgress
                      variant="determinate"
                      value={92}
                      color="inherit"
                      sx={{
                        height: "10px",
                        bgcolor: "#ddd",
                        width: "100%",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "green",
                        },
                        borderRadius: "5px",
                      }}
                    />
                    <Typography>92%</Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ width: "40%", height: "115px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "25px",
                  border: "1px solid #eee",
                  paddingX: "14px",
                  height: 115,
                }}
              >
                <Stack>
                  <Typography variant="h6">Next Up</Typography>
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    mt={2}
                    gap={1}
                    width="80%"
                    fontSize={14}
                  >
                    <PlayCircleFilledWhiteIcon /> Intoducing yourself ..
                  </Stack>
                </Stack>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    width: "135px",
                    height: "40px",
                    fontSize: "15px",
                    // lineHeight: 0,
                    textTransform: "capitalize",
                    "& .MuiButtonBase-root": {
                      padding: 0,
                    },
                  }}
                  style={{ padding: 0 }}
                  onClick={() => router.push("/profile/classroom")}
                >
                  {/* continue your journey */}
                  Go to Material
                </Button>
              </Box>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default FreeCourse;
