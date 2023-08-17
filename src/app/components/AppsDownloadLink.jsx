import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function AppsDownloadLink({ mgrTop, mgrBottom }) {
  return (
    <Box
      display="flex"
      sx={{
        width: "260px",
        marginTop: mgrTop,
        marginBottom: mgrBottom,
      }}
    >
      <Box m="auto">
        <Image
          src="/images/playstoreLogo.png"
          width={110}
          height={41}
          alt="play-store"
        />
      </Box>
      <Box m="auto">
        <img
          src="/images/appstoreLogo.png"
          width={110}
          height={41}
          alt="app-store"
        />
      </Box>
    </Box>
  );
}
