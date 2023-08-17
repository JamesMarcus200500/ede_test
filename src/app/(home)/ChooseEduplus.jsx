import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ItemAsGridChild from "../components/ItemAsGridChild";
import Integration from "../utils/svg/integration";
import EasytoUse from "../utils/svg/easy-to-use";
import Fair from "../utils/svg/fair";
import Timesave from "../utils/svg/time-save";
import Secure from "../utils/svg/secure";
import Collaborative from "../utils/svg/collaborative";
import MenuSubsection from "../components/MenuSubsection";
import TransitionBox from "../components/home/TransitionBox";

export default function ChooseEduplus() {
  const chooseus = [
    {
      id: 1,
      title: "Easy-to-use",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Integration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Fair",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "Time saving",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      title: "Secure",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      title: "Collaborative",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const LoaderIcon = (param) => {
    switch (param) {
      case "Easy-to-use":
        return <EasytoUse />;
      case "Integration":
        return <Integration />;
      case "Fair":
        return <Fair />;
      case "Time saving":
        return <Timesave />;
      case "Secure":
        return <Secure />;
      case "Collaborative":
        return <Collaborative />;
      default:
        break;
    }
  };
  const ChooseUsUi = chooseus.map((data) => (
    <Grid item xs={4} p={2} key={data.id}>
      <ItemAsGridChild>
        {LoaderIcon(data.title)}
        <MenuSubsection>{data.title}</MenuSubsection>
        <p>{data.description}</p>
      </ItemAsGridChild>
    </Grid>
  ));
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
      }}
    >
      <Grid item xs={12}>
        <TransitionBox ix={0} ay={0} ds={0.5} aniScale={0.8}>
          <ItemAsGridChild>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
              mb={4}
            >
              Why choose Edu+
            </Typography>
          </ItemAsGridChild>
        </TransitionBox>
      </Grid>
      <Grid container item spacing={4}>
        {ChooseUsUi}
      </Grid>
    </Container>
  );
}
