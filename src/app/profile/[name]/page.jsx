"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FreeCourse from "@/app/components/classroom/FreeCourse";
import PurchasedCourse from "@/app/components/classroom/PurchasedCourse";
import Wishlist from "@/app/components/classroom/Wishlist";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import RenderCircularProgress from "../../components/RenderCircularProgress";
import { ClassRoomShare } from "../../components/classroom/ClassRoomShare";

const courseTypes = [
  { id: 1, name: "Free Courses" },
  { id: 2, name: "Purchased Courses" },
  { id: 3, name: "Wishlists" },
];

export default function Profile({ params }) {
  const [course, setCourse] = useState(1);
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const [token, setToken] = useState({});

  useEffect(() => {
    setToken(window.localStorage.getItem('authTokenOwn'));
  }, [])
  //console.log("nextAuth google session data",session)
  //console.log(token)
  const stepTab = (step) => {
    switch (step) {
      case 1:
        return <FreeCourse />;
      case 2:
        return <PurchasedCourse />;
      case 3:
        return <Wishlist />;
      default:
        return null;
    }
  };
  if (status === "loading") {
    return (
      <Box sx={{ background: "url(images/bgicon.png)", py: 5 }}>
        <Container>
          <Box
            sx={{
              border: "1px solid #eee",
              bgcolor: "white",
              borderRadius: "25px",
              p: 3,
              mt: 3,
            }}
          >
            <RenderCircularProgress />
          </Box>
        </Container>
      </Box>
    );
  }
  if (status !== "authenticated" && !token) {
    return (
      <Box sx={{ background: "url(images/bgicon.png)", py: 5 }}>
        <Container>
          <Box
            sx={{
              border: "1px solid #eee",
              bgcolor: "white",
              borderRadius: "25px",
              p: 3,
              mt: 3,
            }}
          >
            you need to login to access this page
          </Box>
        </Container>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        background: "url(images/bgicon.png)",
        backgroundSize: "cover",
        py: 5,
      }}
    >
      <Container>
        <Box
          sx={{
            border: "1px solid #eee",
            bgcolor: "white",
            borderRadius: "25px",
            p: 3,
            mt: 3,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  width: 98,
                  height: 98,
                  overflow: "hidden",
                }}
              >
                <Image
                  alt="next iamge"
                  src="/images/logo.png"
                  width="98"
                  height="98"
                />
              </Box>
              <Box>
                <Typography fontSize="18px" fontWeight="bold">
                  Name
                </Typography>
                <Typography fontSize="14px">
                  Role : Instructor or Learner
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                padding: "11px 34px",
                borderRadius: 5,
                "&:hover": {
                  bgcolor: "#C8C8C8",
                  color: "white",
                },
                border: "1px solid #ccc",
              }}
              onClick={() => push("/account-setting")}
            >
              Account setting
            </Button>
          </Stack>
          <Divider sx={{ mt: 2 }} />
          <Stack direction="row" gap={3}>
            {courseTypes.map((courseT) => {
              return (
                <Button
                  sx={{
                    p: 2,
                    fontWeight: course == courseT.id ? "bold" : "",
                    borderBottom: course == courseT.id ? "2px solid #333" : "",
                  }}
                  style={{ borderRadius: 0 }}
                  key={courseT.id}
                  color="inherit"
                  onClick={() => setCourse(courseT.id)}
                  disableRipple
                >
                  {courseT.name}
                </Button>
              );
            })}
          </Stack>
        </Box>
        <Box
          sx={{
            border: "1px solid #eee",
            borderRadius: "25px",
            p: 3,
            px: 10,
            mt: 3,
            bgcolor: "white",
          }}
        >
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h5" sx={{ float: "left" }}>
              Classroom
            </Typography>

            <Box as="div">
              <ClassRoomShare />
            </Box>

            <Typography sx={{ textAlign: "right" }}>Assignment</Typography>
          </Box>

          <Stack mt={5}>{stepTab(course)}</Stack>
        </Box>
      </Container>
    </Box>
  );
}
