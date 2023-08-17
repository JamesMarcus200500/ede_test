import { Grid, Typography } from "@mui/material";
import React from "react";
import ItemAsGridChild from "../components/ItemAsGridChild";
import TransitionBox from "../components/home/TransitionBox";
import CardMainProduct from "../components/CardMainProducts";
import LabelMainProducts from "../components/LabelMainProducts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MainProducts() {
  const { push } = useRouter();
  return (
    <Grid
      container
      sx={{
        paddingTop: "5rem",
        paddingBottom: "8rem",
      }}
    >
      <Grid item xs={12}>
        <ItemAsGridChild>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", fontFamily: "Raleway" }}
            mb={4}
          >
            Main Products
          </Typography>
        </ItemAsGridChild>
      </Grid>
      <Grid container item spacing={7}>
        <Grid item sm={6} lg={3} md={6}>
          <TransitionBox iy="5rem" ay={0} ds={0.5}>
            <ItemAsGridChild>
              <CardMainProduct
                imgUrl={"/images/OtoO.png"}
                bgGradient="border-radius: 25px;background: linear-gradient(141deg, #D2C8FF 0%, rgba(255, 188, 232, 0.00) 100%);"
              />
              <LabelMainProducts>One-to-One</LabelMainProducts>
            </ItemAsGridChild>
          </TransitionBox>
        </Grid>
        <Grid item sm={6} md={6} lg={3} p={2} component={motion.div}>
          <TransitionBox iy="5rem" ay={0} ds={0.65}>
            <ItemAsGridChild>
              <CardMainProduct
                imgUrl={"/images/OtoM.png"}
                bgGradient="25px;
        background: linear-gradient(141deg, #CCFFC8 0%, rgba(250, 214, 214, 0.00) 100%);"
              />
              <LabelMainProducts>One-to-Many</LabelMainProducts>
            </ItemAsGridChild>
          </TransitionBox>
        </Grid>
        <Grid item sm={6} md={6} lg={3} p={2}>
          <TransitionBox iy="5rem" ay={0} ds={0.8}>
            <ItemAsGridChild onClick={() => push("/products/zaybangyi")}>
              <CardMainProduct
                imgUrl={"/images/ZayBanGyi.png"}
                bgGradient="border-radius: 25px;25px;background: linear-gradient(141deg, #D0F3F7 0%, rgba(182, 227, 248, 0.00) 100%);"
              />
              <LabelMainProducts>
                Edu<sup>+</sup> ZayBanGyi
              </LabelMainProducts>
            </ItemAsGridChild>
          </TransitionBox>
        </Grid>
        <Grid item sm={6} md={6} lg={3} p={2}>
          <TransitionBox iy="5rem" ay={0} ds={0.95}>
            <ItemAsGridChild>
              <CardMainProduct
                imgUrl={"/images/edu+ connect.png"}
                bgGradient="border-radius: 25px;background: linear-gradient(141deg, #FFE6C8 0%, rgba(255, 252, 188, 0.00) 100%);"
              />
              <LabelMainProducts>
                Edu<sup>+</sup> Connect
              </LabelMainProducts>
            </ItemAsGridChild>
          </TransitionBox>
        </Grid>
      </Grid>
    </Grid>
  );
}
