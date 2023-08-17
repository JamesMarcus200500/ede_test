import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Wishlist = () => {
  return (
    <Stack gap={3}>
      {[1, 2, 3].map((index) => {
        return (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={3}
            sx={{
              borderRadius: "25px",
              border: "1px solid #eee",
              boxShadow: "3px 3px 5px #eee",
              padding: 3,
              "&:hover": {
                boxShadow: "3px 3px 7px #ddd",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box
                sx={{
                  borderRadius: "25px",
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
                  Basic English Lessons
                </Typography>
                <Box display={"flex"} gap={3} mt={2}>
                  <Typography display={"flex"} alignItems="center" gap={1}>
                    <AutoStoriesIcon /> 25+ lessons
                  </Typography>
                  <Typography display={"flex"} alignItems="center" gap={1}>
                    <WatchLaterIcon /> 32 hours 23 mins
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{ px: 5, py: 2, borderRadius: "15px" }}
              color="inherit"
              variant="outlined"
            >
              Remove
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Wishlist;
