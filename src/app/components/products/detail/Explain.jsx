import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Explain = ({ setSection, section }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "665px",
          mt: 5,
          p: 3,
          borderRadius: "25px",
          background: "#fff",
          border: "2px solid #eee",
        }}
      >
        <Typography sx={{ mb: 3, fontSize: 25, fontWeight: 700 }}>
          Beginner English Class
        </Typography>
        <Typography component="p" sx={{ mb: 3 }} fontWeight={400}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          blanditiis saepe vel doloremque consequuntur.
        </Typography>
        <Typography fontWeight={700} mt={2}>
          Choose the section you like and enroll with any available teacher.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            mt: 1,
            gap: 2,
          }}
        >
          {[
            { section: "7 pm to 8 pm" },
            { section: "8 pm to 9 pm" },
            { section: "9 pm to 10 pm" },
          ].map((s, index) => {
            return (
              <Stack
                key={index}
                justifyContent="center"
                width={145}
                sx={{
                  borderRadius: "15px",
                  border: section === s.section || "1px solid #333",
                  alignItems: "center",
                  height: 51,
                  fontSize: 15,
                  cursor: "pointer",
                  background: section === s.section && "#757575",
                }}
                onClick={() => setSection(s.section)}
              >
                <Typography
                  fontWeight={700}
                  fontSize={15}
                  sx={{ color: section === s.section && "white" }}
                >
                  S - A
                </Typography>
                <Typography
                  sx={{ color: section === s.section && "white" }}
                  fontWeight={400}
                  fontSize={15}
                >
                  {s.section}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: 665,
          height: 60,
          py: "10px",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          bgcolor: "white",
          mt: 4,
          gap: 5,
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            overflow: "hidden",
          }}
        >
          <Image src="/images/vdsample.png" alt="sdf" height={80} width={120} />
        </Box>
        <Typography>Beginner </Typography>
        <Divider orientation="vertical" variant="middle" />
        <Typography>Certificate </Typography>
        <Divider orientation="vertical" variant="middle" />

        <Typography>Three Months </Typography>
      </Box>
    </Box>
  );
};

export default Explain;
