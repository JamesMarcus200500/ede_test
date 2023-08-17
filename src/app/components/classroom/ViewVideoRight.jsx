import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const ViewVideoRight = () => {
  return (
    <Box
      sx={{
        width: "700px",
        height: "395px",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      {/* demo video  */}
      <Image src="/images/vdsample.png" alt="video" width="700" height="395" />
    </Box>
  );
};

export default ViewVideoRight;
