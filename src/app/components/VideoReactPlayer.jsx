import {
  ThumbDown,
  ThumbUp,
  VolumeOff,
  VolumeUp,
  Pause,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RenderLinearProgress from "./RenderLinearProgress";

export default function VideoReactPlayer({ id, title, url }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [views, setViews] = useState(13);
  const [timesAgo, setTimesAgo] = useState(3);
  // const [isMute, setIsMute] = useState(false)
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const videoRef = useRef(null);

  const toggleMute = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const togglePlay = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value) / 100 });
  };

  const PlayIcon = (
    <IconButton
      aria-label="play/pause"
      sx={{
        position: "absolute",
        background: "rgba(255,255,255,0.4)",
        left: "50%",
        marginLeft: "-25px",
        zIndex: 99,
      }}
      onClick={togglePlay}
    >
      {" "}
      {videoState.playing ? (
        <Pause sx={{ height: 40, width: 40 }} />
      ) : (
        <PlayArrowIcon sx={{ height: 40, width: 40 }} />
      )}
    </IconButton>
  );

  /* https://stackoverflow.com/questions/49393838/how-to-make-reactplayer-scale-with-height-and-width */
  const beginningHandler = () => {
    const videoTag = videoRef.current.getInternalPlayer();
    videoTag.style.objectFit = "cover";
  };

  return (
    <Card
      style={{
        position: "relative",
        width: "100%",
        height: 400,
        display: "flex",
        borderRadius: "20px",
        alignItems: "center",
      }}
    >
      <CardHeader
        action={
          <>
            <IconButton onClick={toggleMute}>
              {!videoState.muted ? (
                <VolumeUp sx={{ color: "#fff" }} />
              ) : (
                <VolumeOff sx={{ color: "#fff" }} />
              )}
            </IconButton>
          </>
        }
        //title="Shrimp and Chorizo Paella"
        subheader="60s"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9,
          textAlign: "left",
        }}
        subheaderTypographyProps={{ color: "white" }}
      />
      <ReactPlayer
        ref={videoRef}
        url={url}
        controls={false}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, bottom: 0 }}
        playing={videoState.playing}
        //playIcon={<button>play</button>}
        muted={videoState.muted}
        light={false}
        playsinline={true}
        onReady={beginningHandler}
        played={videoState.played}
        onSeek={seekHandler}
      />
      {PlayIcon}
      <Box as="div" sx={{ width: "100%", position: "absolute", bottom: 0 }}>
        <RenderLinearProgress />
      </Box>
      <Box sx={{ position: "absolute", right: 0, textAlign: "center" }}>
        <IconButton onClick={() => setLikes((like) => like + 1)}>
          <ThumbUp sx={{ color: "#ddd" }} />
        </IconButton>
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>
          {likes}
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>likes</Typography>
        <br />
        <IconButton onClick={() => setDisLikes((dlike) => dlike + 1)}>
          <ThumbDown sx={{ color: "#ddd" }} />
        </IconButton>
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>
          {dislikes}
        </Typography>
        <Typography sx={{ color: "#fff", fontSize: "12px" }}>
          Dislikes
        </Typography>
      </Box>

      <CardContent
        sx={{
          position: "absolute",
          color: "#fff",
          bottom: -35,
          textAlign: "left",
        }}
      >
        <Typography
          paragraph
          sx={{ fontWeight: 800, color: "#ddd", fontfamily: "Raleway" }}
        >
          {title}
        </Typography>
        <Typography paragraph sx={{ color: "#ddd", marginBottom: 0 }}>
          # Quick Learn
        </Typography>
        <Typography paragraph sx={{ color: "#ddd", fontfamily: "Raleway" }}>
          {views}K views . {timesAgo} days ago
        </Typography>
      </CardContent>
    </Card>
  );
}
