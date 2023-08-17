import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import React from "react";

const NewsCard1 = () => {
  return (
    <Card sx={{ width: "375px", height: "375px", borderRadius: "25px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/images/vdsample.png"
        sx={{ borderRadius: "25px", height: "228px" }}
      />
      <Box
        sx={{
          width: "309px",
          height: "147px",
          position: "relative",
          top: "-50px",
          backgroundImage: "linear-gradient(90deg,  #FFE9F4 7.92%, #FFF)",
          zIndex: 10,
          mx: "auto",
          borderRadius: "25px",
          padding: "15px",
          boxShadow: "2px 1px 2px #ddd",
        }}
      >
        <Typography fontSize="21px" height="60px">
          Introduction English Grammar
        </Typography>
        <Box marginY="10px" display="flex" gap="5px">
          <AutoStoriesIcon style={{ color: "gray" }} />
          <Typography>34 lessons</Typography>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            borderRadius: 7,
            padding: "11px 26px",
            float: "right",
          }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};

export default NewsCard1;
