"use client";
import { Alert, Typography, Card, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
// import CardMainProduct from "../../../components/CardMainProducts";
// import LabelMainProducts from "../../../components/LabelMainProducts";
import { useRouter } from "next/navigation";
import CardMediaVideo from "@/app/components/CardMediaVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuickLearnVideos } from "@/app/store/quicklearnVideosSlice";
import RenderCircularProgress from "@/app/components/RenderCircularProgress";
import VideoReactPlayer from "@/app/components/VideoReactPlayer";
import WarningAlert from "@/app/components/WarningAlert";
import ErrorAlert from "@/app/components/ErrorAlert";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  //padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none!important",
}));

export default function QuickLearnVideos() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [haveData, sethaveData] = useState(false);
  const [videos, setVideos] = useState([]);
  const [haveError, setHaveError] = useState(false);

  // const { loading, haveData, haveError, videos, intruder } = useSelector((state) => ({
  //   ...state.quickLearnVideosData,
  // }));
  // useEffect(() => {
  //   dispatch(fetchQuickLearnVideos());
  // }, []);

  useEffect(() => {
    fetch("https://edtech.ilbc.edu.mm/api/videos").then((response) => {
      setLoading(true)
      if (response.status === 204) {
        setLoading(false);
        sethaveData(false);
        setHaveError(true);
        return undefined;
      }
      if (response.status === 403) {
        setLoading(false);
        sethaveData(false);
        setHaveError(true);
        activeToken = null;
      }
      response.json().then((result) => {
        setLoading(false);
        sethaveData(true);
        setHaveError(false);
        setVideos(result.videos)
      });
    }).catch(error => error)
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
        mt={6}
        mb={8}
      >
        Quick Learn vd list
      </Typography>
      <Grid container spacing={2} mb={8}>
        {
          loading ?
            <RenderCircularProgress />
            : haveError ? <ErrorAlert>Api cannot return data</ErrorAlert>
              // : haveData && intruder ? <ErrorAlert>{intruder}</ErrorAlert>
                : haveData && videos.length == 0 ? <WarningAlert>There is no data yet!</WarningAlert>
                  : haveData && videos.map(video => <Grid item xs={6} lg={3} md={4} key={video.id}><Item><VideoReactPlayer {...video} /></Item></Grid>)
        } 
      </Grid>
      {/* <VideoReactPlayer url="https://joy1.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Falls9_preview.mp4" /> */}
    </Container>
  );
}
