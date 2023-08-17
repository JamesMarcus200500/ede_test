import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TransitionBox from "../home/TransitionBox";

export default function AboutCard({ index }) {
  return (
    // flexDirection={"row-reverse"}
    <Box
      display="flex"
      gap={3}
      px="5rem"
      py="2rem"
      flexDirection={` ${index ? "row-reverse" : "row"}`}
    >
      <Box width="50%">
        <TransitionBox ix="-5rem" ay="0" ds={0.5}>
          <Typography
            textAlign="justify"
            variant="body2"
            letterSpacing={1}
            lineHeight={2}
            whiteSpace={2}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            illum tempore ducimus sapiente optio aut dolorum aliquam commodi
            dolores quibusdam, esse eligendi eaque assumenda quod quaerat
            mollitia nam consequuntur molestias, facere delectus illo? Fugiat
            dolorem non inventore nemo cupiditate quas ab consectetur ut,
            suscipit eius, tenetur architecto sit? Magnam laudantium odio
            impedit minus atque nulla! Blanditiis quo illum aspernatur quod
            dicta quas nam, ex maxime eos. Magnam, quo est. Eaque, aliquid. Odio
            eligendi repellat fuga distinctio ipsa, corporis aperiam nulla
            dignissimos quia ipsam temporibus voluptatibus consequuntur placeat
            eius alias, dicta reprehenderit quibusdam. Sapiente illum error
            blanditiis architecto iste doloribus ullam!
          </Typography>
        </TransitionBox>
      </Box>
      {/* <img
        src=""
        alt="about-image"
        width="50%"
      /> */}
      <Box width="50%">
        <TransitionBox ix="5rem" ax={0} ds={0.5}>
          <img
            src="/images/profile.jpg"
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </TransitionBox>
      </Box>
      {/* <Image
        src={"/images/profile.jpg"}
        alt="about-image"
        width={500}
        height={500}
        objectFit="cover"
      /> */}
    </Box>
  );
}
