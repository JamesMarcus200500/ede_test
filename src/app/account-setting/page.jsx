"use client";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  accountSettings,
  displayComponents,
  mySubscriptions,
} from "@/app/utils/constant";
import { useRouter } from "next/navigation";

export default function AccountSetting() {
  const [steps, setSteps] = useState(2);
  const router = useRouter();
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    setProfileImg(window.localStorage.getItem("profileImg"));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${"/images/bgicon.png"})`,
        backgroundSize: "100%",
      }}
    >
      <Container
        sx={{
          paddingY: "4rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              display="flex"
              flexDirection="column"
              borderRadius={3}
              bgcolor="#FFF"
              overflow="hidden"
              position="relative"
              sx={{ boxShadow: 1, mx: "auto" }}
            >
              <Box bgcolor="#FCC" height="133px" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={160}
                mt={-10}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={profileImg}
                  sx={{ width: 140, height: 140, border: "4px solid #fff" }}
                />
              </Box>
              <Stack direction="column" textAlign="center" mb={2}>
                <Typography fontSize="20px" fontWeight="700">
                  Oggy
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  Learner
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              display="flex"
              flexDirection="column"
              padding={3}
              borderRadius={3}
              bgcolor="#FFF"
              sx={{ boxShadow: 1 }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  p={2}
                  flex={0.3}
                  border="1px solid #c8c8c8"
                  borderRadius="25px"
                >
                  <Typography fontSize="30px" fontWeight={500}>
                    4
                  </Typography>
                  <Typography fontSize="20px" fontWeight={800}>
                    Purchase All Course
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      textAlign: "left",
                      textDecoration: "underline",
                      textTransform: "initial",
                      fontSize: "16px",
                      fontWeight: 400,
                      cursor: "pointer",
                      "& :hover": {
                        color: "dodgerblue",
                      },
                    }}
                  >
                    View All
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  p={2}
                  flex={0.3}
                  border="1px solid #c8c8c8"
                  borderRadius="25px"
                >
                  <Typography fontSize="30px" fontWeight={500}>
                    4
                  </Typography>
                  <Typography fontSize="20px" fontWeight={800}>
                    Purchase All Course
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      textAlign: "left",
                      textDecoration: "underline",
                      textTransform: "initial",
                      fontSize: "16px",
                      fontWeight: 400,
                      cursor: "pointer",
                      "& :hover": {
                        color: "dodgerblue",
                      },
                    }}
                  >
                    View All
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  p={2}
                  flex={0.3}
                  border="1px solid #c8c8c8"
                  borderRadius="25px"
                >
                  <Typography fontSize="30px" fontWeight={500}>
                    4
                  </Typography>
                  <Typography fontSize="20px" fontWeight={800}>
                    Purchase All Course
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      textAlign: "left",
                      textDecoration: "underline",
                      textTransform: "initial",
                      fontSize: "16px",
                      fontWeight: 400,
                      cursor: "pointer",
                      "& :hover": {
                        color: "dodgerblue",
                      },
                    }}
                  >
                    View All
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                flex={0.3}
                justifyContent="flex-start"
                alignItems="center"
                mt={3}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "initial",
                    color: "#454545",
                    padding: "11px 34px",
                    border: "1px solid #c8c8c8",
                    borderRadius: "41px",
                  }}
                  onClick={() => router.push("/profile")}
                >
                  Dashboard
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              borderRadius={3}
              bgcolor="#FFF"
              sx={{ boxShadow: 1, height: "850px" }}
            >
              <Box p={2} mb={4}>
                <Typography
                  fontSize="21px"
                  ml={2}
                  fontWeight={700}
                  textAlign="left"
                >
                  Account Setting
                </Typography>
                <Divider sx={{ height: 0.5, borderColor: "#000", my: 2 }} />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap={1}
                >
                  {accountSettings.map((accSet) => (
                    <Stack
                      sx={{
                        cursor: "pointer",
                        bgcolor: steps === accSet.id && "#F0F0F0",
                        borderRadius: "10px",
                        transition: "all .3s ease",
                        py: 1,
                        width: "100%",
                      }}
                      key={accSet.id}
                      component="div"
                      onClick={() => setSteps(accSet.id)}
                    >
                      <Stack direction="row" ml={2} gap={{ xs: 1, md: 2 }}>
                        {accSet.icon}
                        <Typography
                          fontSize="18px"
                          color={steps === accSet.id && "primary"}
                          fontWeight={400}
                          sx={{
                            "&:hover": {
                              color: "#c8c8c8",
                            },
                            transition: ".2s all ease-in",
                          }}
                        >
                          {accSet.title}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              <Box p={2} mb={4}>
                <Typography
                  fontSize="21px"
                  ml={2}
                  fontWeight={700}
                  textAlign="left"
                >
                  Subscription
                </Typography>
                <Divider sx={{ height: 0.5, borderColor: "#000", my: 2 }} />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap={1}
                >
                  {mySubscriptions.map((accSub) => (
                    <Stack
                      sx={{
                        cursor: "pointer",
                        bgcolor: steps === accSub.id && "#F0F0F0",
                        borderRadius: "10px",
                        py: 1,
                        width: "100%",
                      }}
                      component="div"
                      key={accSub.id}
                      onClick={() => setSteps(accSub.id)}
                    >
                      <Stack direction="row" ml={2} gap={{ xs: 1, md: 2 }}>
                        {accSub.icon}
                        <Typography fontSize="18px" fontWeight={400}>
                          {accSub.title}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              <Box
                pb={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  sx={{
                    borderRadius: "40px",
                    padding: "11px 34px",
                    border: " 1px solid #C8C8C8",
                    textTransform: "initial",
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              borderRadius={3}
              bgcolor="#FFF"
              overflow="hidden"
              sx={{ boxShadow: 1, height: "850px" }}
            >
              <Stack direction="column" m={4}>
                {displayComponents(steps)}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
