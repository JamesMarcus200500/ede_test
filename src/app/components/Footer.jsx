"use client";
import { Container, Grid, MenuItem, Toolbar } from "@mui/material";
import NavMenuItem from "../main-nav/NavMenuItem";
import AppsDownloadLink from "./AppsDownloadLink";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${"/images/bgiconlight.png"})`,
        backgroundSize: "100%",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1280px",
          margin: "auto",
        }}
        pt={8}
        pl={3}
        pr={3}
      >
        <Grid item xs={7}>
          {/* <NavMenuItem routeTo={"/term"}>term of use</NavMenuItem>
          <NavMenuItem routeTo={"/privacypolicy"}>privacy policy</NavMenuItem>
          <NavMenuItem routeTo={"/contact"}>contact us</NavMenuItem> */}
          <ul className="flexul">
            <li>
              <Link href="/">term of use</Link>
            </li>
            <li>
              <Link href="/about">privacy policy</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">contact us</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <AppsDownloadLink />
        </Grid>
        <Grid item md={3} sx={{ textAlign: "right" }} mb={0}>
          <ul>
            <li>@2023 Edu+ All rights reserved</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}
