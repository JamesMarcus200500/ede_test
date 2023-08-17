import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function RenderCardMedia({ mediaPath, width, component }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: 0,
        background: "transparent",
        marginTop: -8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //p: { sm: "2rem", md: "8rem" },
          //px: { sm: "2rem", md: "4rem" },
          boxShadow: 0,
          zIndex: 99,
          width: "80%",
          margin: "auto",
        }}
      >
        <CardMedia
          component={component} //change video later
          sx={{ width: width }}
          image={mediaPath}
          alt="Live from space album cover"
          // autoplay
          controls
        />
        <IconButton
          aria-label="play/pause"
          sx={{
            position: "absolute",
            background: "rgba(255,255,255,0.4)",
            left: "50%",
            marginLeft: "-50px",
          }}
        >
          <PlayArrowIcon sx={{ height: 100, width: 100 }} />
        </IconButton>
      </Box>
    </Card>
  );
}
