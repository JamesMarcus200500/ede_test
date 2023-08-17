import React from "react";
import { supportedPlatforms } from "../custom";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ItemAsGridChild from "../components/ItemAsGridChild";

export default function SupportedPlatforms() {
  const SupportedPlatforms = supportedPlatforms.map((supportPlatform) => (
    <Grid item xs={2} key={supportPlatform.id}>
      <ItemAsGridChild sx={{ background: "transparent", boxShadow: 0 }}>
        <Image
          src={supportPlatform.iconPath}
          width={40}
          height={42}
          alt={supportPlatform.label}
        />
        <Typography
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            marginTop: "22px",
            fontFamily: "Raleway",
          }}
        >
          {supportPlatform.label}
        </Typography>
      </ItemAsGridChild>
    </Grid>
  ));
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "#217FCE",
        minHeight: "50vh",
        paddingTop: "72px",
        paddingBottom: "38px",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1280px",
          margin: "auto",
        }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "30px",
              fontFamily: "Raleway",
              fontWeight: 800,
              textAlign: "center",
            }}
            mb={5}
          >
            Edu+ is a learning platform and supports
          </Typography>
        </Grid>
        <Grid container item spacing={10}>
          {SupportedPlatforms}
        </Grid>
      </Grid>
    </Container>
  );
}
