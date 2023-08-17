"use client";
import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CardMainProduct from "../components/CardMainProducts";
import LabelMainProducts from "../components/LabelMainProducts";
import { useRouter } from "next/navigation";

export default function Blog() {
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
              Main Products
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={3} p={2}>
          <Item>
            <CardMainProduct
              imgUrl={"/images/OtoO.png"}
              bgGradient="border-radius: 25px;background: linear-gradient(141deg, #D2C8FF 0%, rgba(255, 188, 232, 0.00) 100%);"
            />
            <LabelMainProducts>One-to-One</LabelMainProducts>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}>
          <Item>
            <CardMainProduct
              imgUrl={"/images/OtoM.png"}
              bgGradient="25px;
              background: linear-gradient(141deg, #CCFFC8 0%, rgba(250, 214, 214, 0.00) 100%);"
            />
            <LabelMainProducts>One-to-Many</LabelMainProducts>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}>
          <Item onClick={() => push('/products/zaybangyi')}> 
            <CardMainProduct
              imgUrl={"/images/ZayBanGyi.png"}
              bgGradient="border-radius: 25px;25px;background: linear-gradient(141deg, #D0F3F7 0%, rgba(182, 227, 248, 0.00) 100%);"
            />
            <LabelMainProducts>
              Edu<sup>+</sup> ZayBanGyi
            </LabelMainProducts>
          </Item>
        </Grid>
        <Grid item xs={3} p={2}>
          <Item>
            <CardMainProduct
              imgUrl={"/images/edu+ connect.png"}
              bgGradient="border-radius: 25px;background: linear-gradient(141deg, #FFE6C8 0%, rgba(255, 252, 188, 0.00) 100%);"
            />
            <LabelMainProducts>
              Edu<sup>+</sup> Connect
            </LabelMainProducts>
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
