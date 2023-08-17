"use client";
import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CardMainProduct from "../../components/CardMainProducts";
import LabelMainProducts from "../../components/LabelMainProducts";
import { useRouter } from "next/navigation";

export default function ZayBanGyi() {
  const {push} = useRouter();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "2",
    textAlign: "center",
    boxShadow: "none",
    fontFamily: "Raleway",
  }));
  return (
    <React.Fragment>
      <Grid container sx={{ paddingTop: "81px", paddingBottom: "130px" }}>
        <Grid item xs={12}>
          <Item>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
            >
              Zay Ban Gyi
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}></Grid>
        <Grid item xs={3} p={2}>
          <Item onClick={() => push('/products/zaybangyi/quicklearn')}>
            <CardMainProduct
              imgUrl={"/images/OtoO.png"}
              bgGradient="border-radius: 25px;background: linear-gradient(141deg, #D2C8FF 0%, rgba(255, 188, 232, 0.00) 100%);"
            />
            <LabelMainProducts>Quick Learn</LabelMainProducts>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}>
          <Item>
            <CardMainProduct
              imgUrl={"/images/OtoM.png"}
              bgGradient="25px;
              background: linear-gradient(141deg, #CCFFC8 0%, rgba(250, 214, 214, 0.00) 100%);"
            />
            <LabelMainProducts>Introductory</LabelMainProducts>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}></Grid>
      </Grid>
    </React.Fragment>
  );
}
