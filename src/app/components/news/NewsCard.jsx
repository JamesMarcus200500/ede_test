import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TextIcon from "../TextIcon";
import { AutoStories, WatchLater } from "@mui/icons-material";

const NewsCard = () => {
  return (
    <Box sx={{ width: "252px", height: "305px", borderRadius: "25px" }}>
      <Box sx={{ borderRadius: "25px", overflow: "hidden" }}>
        <Image
          src="/images/profile.jpg"
          alt="news-image"
          width={252}
          height={125}
        />
      </Box>
      <Stack padding="14px">
        <Typography fontSize={18}>card header</Typography>
        <Typography fontSize={11}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio magnam qui laudantium exercitationem?
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextIcon icon={<AutoStories />} name="English" />
          <TextIcon icon={<WatchLater />} name="30 mins" />
        </Box>
      </Stack>
    </Box>
  );
};

export default NewsCard;
