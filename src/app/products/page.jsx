"use client";

import { Box, Grid } from "@mui/material";
import TransitionBox from "../components/home/TransitionBox";

import MainProduct from "../components/products/MainProduct";
export const MainProducts = [
  {
    id: 1,
    bgcolor:
      "linear-gradient(141deg, #D2C8FF 0%, rgba(255, 188, 232, 0.00) 100%)",
    hovercolor:
      "linear-gradient(141deg, #D2C8FF 0%, rgba(255, 188, 232, 0.8) 0%)",
    name: "One-to-One",
    image: "/images/OtoO.png",
    linkTo: "/one-to-one",
  },
  {
    id: 2,
    bgcolor:
      " linear-gradient(141deg, #CCFFC8 0%, rgba(250, 214, 214, 0.00) 100%)",
    hovercolor:
      " linear-gradient(141deg, #CCFFC8 0%, rgba(250, 214, 214, 0.8) 0%)",
    name: "One-to-Many",

    image: "/images/OtoM.png",
    linkTo: "/one-to-many",
  },
  {
    id: 3,
    bgcolor:
      "linear-gradient(141deg, #D0F3F7 0%, rgba(182, 227, 248, 0.00) 100%)",
    hovercolor:
      "linear-gradient(141deg, #D0F3F7 0%, rgba(182, 227, 248, 0.8) 0%)",
    name: "Edu + ZayBanGyi",
    image: "/images/ZayBanGyi.png",
    linkTo: "/zaybangyi",
  },
  {
    id: 4,
    bgcolor:
      "linear-gradient(141deg, #FFE6C8 0%, rgba(255, 252, 188, 0.00) 100%)",
    hovercolor:
      "linear-gradient(141deg, #FFE6C8 0%, rgba(255, 252, 188, 0.8) 100%)",
    name: "Edu + Connect",
    image: "/images/edu+ connect.png",
    linkTo: "/edu-connect",
  },
];

const Page = () => {
  return (
    <>
      <Box
        sx={{
          background: "#E9F8FF",
          padding: "80px",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          {MainProducts.map((product) => {
            return (
              <Grid
                item
                sm={6}
                md={6}
                lg={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={2}
                key={product.id}
              >
                <TransitionBox iy="5rem" ay={0} ds={0.8}>
                  <MainProduct product={product} />
                </TransitionBox>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Page;
