"use client";
import React from "react";
import NewsCard1 from "../components/NewsCard1";
import { Box, Container, Grid } from "@mui/material";
import NewsCard from "../components/news/NewsCard";

const page = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
      }}
    >
      <Grid container spacing={3} mt={8}>
        <Grid item xs={8}>
          {/* <NewsCard1 /> */}
          <NewsCard />
        </Grid>
        {/* <Grid item xs={4}>
            <NewsCard />
          </Grid> */}
      </Grid>
    </Container>
  );
};

export default page;
