import { Box, Card, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <Card sx={{ width: "239px", height: "251px", borderRadius: "25px" }}>
      <CardMedia
        image="/images/profilebg.png"
        component="img"
        alt="profile image"
      ></CardMedia>
      <Box
        sx={{
          borderRadius: "81px",
          mt: -14,
          marginX: "40px",
          overflow: "hidden",
          border: "2px solid #efefef",
        }}
      >
        <Image alt="sdf" src="/images/profile.jpg" width="160" height="160" />
      </Box>
      <Typography sx={{ textAlign: "center", fontSize: "16px" }} variant="h6">
        John Harry
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: 14 }}>
        {" "}
        Instructor
      </Typography>
    </Card>
  );
};

export default ProfileCard;
