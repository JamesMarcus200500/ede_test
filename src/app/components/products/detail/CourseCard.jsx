import {
  AutoStories,
  BookOnlineRounded,
  WatchLater,
} from "@mui/icons-material";
import { Box, Card, CardMedia, Link, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonPrimary from "../../ButtonPrimary";
import { auth } from "../../../../../firebase";

// const CourseCard = () => {
//   return (
//     <Card sx={{ width: "420px", p: 3, borderRadius: "25px" }}>
//       <CardMedia
//         component="img"
//         height="300"
//         image="images/profile.jpg"
//         alt="Paella dish"
//       />
//       <Typography mt={2}>Achieve your goals in English</Typography>
//       <Typography mt={2}>Beginner Level</Typography>
//       <Typography my={2} sx={{ cursor: "progress" }}>
//         10 hours 45 mins
//       </Typography>
//       <hr />
//       <Typography
//         mt={2}
//         sx={{ textDecoration: "underline", cursor: "pointer" }}
//       >
//         View All Courses
//       </Typography>
//     </Card>
//   );
// };
const CourseCard = ({ section }) => {
  return (
    <Box
      sx={{
        width: 420,
        height: 738,
        borderRadius: "25px",
        background: "#FFFAFA",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography>Avaiable Classes</Typography>

        <Stack alignItems="flex-end">
          <WatchLater />
          <Typography>{section}</Typography>
        </Stack>
      </Box>
      <Stack gap={2} mt={4}>
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return (
            <Box
              key={index}
              sx={{
                height: "60px",
                background:
                  "linear-gradient(92deg, #DCDCDC 1.84%, rgba(218, 218, 218, 0.00) 100%)",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #243C4F",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <AutoStories />
                </Box>
                <Typography>Class-A</Typography>
              </Box>
              <ButtonPrimary>Enroll for purchase</ButtonPrimary>
            </Box>
          );
        })}
      </Stack>
      <Link sx={{ float: "right", mt: 2 }}>View all</Link>
    </Box>
  );
};

export default CourseCard;
