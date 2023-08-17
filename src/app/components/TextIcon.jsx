import React from "react";
import { AutoStories } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const TextIcon = ({ icon, name }) => {
  return (
    <Stack direction="row">
      {icon}
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default TextIcon;
