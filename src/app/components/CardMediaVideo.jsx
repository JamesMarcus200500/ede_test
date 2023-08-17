import React, { useEffect, useReducer, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Pause, ThumbDown, ThumbUp, VolumeOff, VolumeUp } from '@mui/icons-material';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box } from '@mui/material';

export default function CardMeiaVideo({ id, title, url }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [views, setViews] = useState(13);
  const [timesAgo, setTimesAgo] = useState(3);
  const [openSound, setOpenSound] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null);

  const togglePlay = () => {
    try {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying((play) => !play)
    } catch (error) {
      console.log(">>>",error)
    }
  }

  const toggleSound = () => {
    if (openSound) {
      videoRef.current.volume = 1.0;
    } else {
      videoRef.current.volume = 0;
    }
    setOpenSound((open) => !open)
  }

  return (
    <Card sx={{ maxWidth: 260, height: '400px', boxShadow: 0, position: 'relative', borderRadius: '25px' }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //p: { sm: "2rem", md: "4rem" },
          boxShadow: 0,
          height: '100%',
          background: '#000'
        }}
      >
        <CardHeader
          action={
            <>
              <IconButton onClick={toggleSound}>
                {
                  !openSound ?
                    <VolumeUp sx={{ color: '#fff' }} />
                    : <VolumeOff sx={{ color: '#fff' }} />
                }
              </IconButton>
            </>
          }
          //title="Shrimp and Chorizo Paella"
          subheader="60s"
          sx={{ position: 'absolute', top: 0, width: '100%' }}
          subheaderTypographyProps={{ color: 'white' }}
        />
        <CardMedia
          ref={videoRef}
          component="video"
          height="100%"
          //image={"https://joy1.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Falls9_preview.mp4"}
          image={url}
          alt="Paella dish"
          //controls
          allow={"autoPlay"}
          sx={{ width: 'auto!important' }}
        />
        <IconButton
          aria-label="play/pause"
          sx={{
            position: "absolute",
            background: "rgba(255,255,255,0.4)",
            left: "50%",
            marginLeft: "-25px",
          }}
          onClick={togglePlay}
        >
          {
            !isPlaying ?
              <PlayArrowIcon sx={{ height: 40, width: 40 }} />
              :
              <Pause sx={{ height: 40, width: 40 }} />
          }
        </IconButton>
        <Box sx={{ position: 'absolute', right: 0 }}>
          <IconButton onClick={() => setLikes((like) => like + 1)}>
            <ThumbUp sx={{ color: '#ddd' }} />
          </IconButton>
          <Typography sx={{ color: '#fff' }}>{likes}likes</Typography>
          <br />
          <IconButton onClick={() => setDisLikes((dlike) => dlike + 1)} >
            <ThumbDown sx={{ color: '#ddd' }} />
          </IconButton>
          <Typography sx={{ color: '#fff' }}>{dislikes}Dislikes</Typography>
        </Box>
        <CardContent sx={{ position: 'absolute', color: '#fff', bottom: 40 }}>
          <Typography paragraph sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
          <Typography paragraph># Quick Learn</Typography>
          <Typography paragraph>{views}K views . {timesAgo} days ago</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
