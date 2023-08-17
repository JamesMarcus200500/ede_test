"use client";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Box, Grid, Paper, Container, useMediaQuery } from "@mui/material";
import ButtonTransparent from "../components/ButtonTransparent";
import { firebaseError } from "../custom";
import RenderCardMedia from "../components/RenderCardMedia";
import AppsDownloadLink from "../components/AppsDownloadLink";
import "react-phone-number-input/style.css";
import CountTextBlue from "../components/CountTextBlue";
import FormVeriyOTP from "../(auth)/register/formVerifyAuthcode";
import FormGetAuthCode from "../(auth)/register/formgetAuthCode";
import ModalRegister from "../(auth)/register/modalRegister";
import SnackbarWarningMessage from "../components/SnackBar";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import UiFounders from "../components/uifounders";
import CounterUp from "../components/CounterUp";
import TransitionBox from "../components/home/TransitionBox";
import TransitionButton from "../components/home/TransitionButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FaqsUi from "./faq";
import SupportedPlatforms from "./SupportedPlatforms";
import ChooseEduplus from "./ChooseEduplus";
import MainProducts from "./MainProducts";

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sentOTP, setSentOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [openRegModal, setOpenRegModal] = useState(false);
  const handleRegModalOpen = () => setOpenRegModal(true);
  const handleRegModalClose = () => setOpenRegModal(false);
  const [user, setUser] = React.useState("");
  const { push } = useRouter();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    fontFamily: "Raleway",
  }));

  const LabelMain = styled("label")(({ theme }) => ({
    marginTop: "-8rem",
    marginBottom: "10px",
    background:
      "linear-gradient(101deg, #42AAFF 0%, #217FCE 46.15%, #42AAFF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: isTablet ? "2.5rem" : "3rem",
    fontFamily: "Raleway",
    lineHeight: "61px",
    padding: "10px",
    fontWeight: 800,
  }));

  const LabelMainSmall = styled("h2")(({ theme }) => ({
    //color: "#217FCE",
    textAlign: "center",
    fontSize: theme.breakpoints.up("md") ? "22px" : "18px",
    fontWeight: 600,
    lineHeight: "12px",
    fontFamily: "Raleway",
    marginBottom: "45px",
  }));

  const LabelSecondary = styled("h3")({
    fontSize: "35px",
    fontfamily: "Raleway",
    textAlign: "center",
    fontWeight: 700,
  });

  const tokenId = null; //window.localStorage.getItem('tokenId');
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) =>
      setUser(currUser)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: isTablet ? "-6rem" : "-8rem",
          minHeight: isTablet ? "500px" : "600px",
          backgroundImage: `url(${"/images/bgicon.png"})`,
          backgroundSize: "100%",
        }}
      >
        <SnackbarWarningMessage />
        <TransitionBox ix="-10rem" ax={0} ds={0.5}>
          <LabelMain>Welcome to ILBC EduPlus Platform</LabelMain>
        </TransitionBox>
        <TransitionBox ix="10rem" ax={0} ds={0.5}>
          <LabelMainSmall>
            Empower Your English Journey with ILBC EduPlus!
          </LabelMainSmall>
        </TransitionBox>
        {sentOTP ? (
          <FormVeriyOTP
            setError={setError}
            error={error}
            handleRegModalOpen={handleRegModalOpen}
            setOpenSnakBar={setOpen}
          />
        ) : (
          <TransitionBox iy="5rem" ay={6} ds={1}>
            <FormGetAuthCode
              setLoading={setLoading}
              setSentOTP={setSentOTP}
              setError={setError}
              setOpenSnakBar={setOpen}
            />
          </TransitionBox>
        )}

        {!sentOTP && !tokenId && (
          <div id="recaptcha-container" style={{ width: "470px" }}></div>
        )}
        <SnackbarWarningMessage openState={open} handleClose={handleClose}>
          {firebaseError(error)}
        </SnackbarWarningMessage>

        <TransitionBox iy="5rem" ay={0} ds={1}>
          <AppsDownloadLink
            mgrTop={isTablet ? "30px" : "40px"}
            mgrBottom="30px"
          />
        </TransitionBox>
        {/* <span>{error}</span> */}
        {/* <ModalOTP open={sentOTP} handleClose={handleClose} handleOpen={handleOpen} setSentOTP={setSentOTP} /> */}
        <ModalRegister
          open={openRegModal}
          handleClose={handleRegModalClose}
          handleOpen={handleRegModalOpen}
        />
      </Grid>
      {/* <Container maxWidth="xl" sx={{ marginTop: { md: "80px", lg: "-12rem" } }}> */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1280px",
        }}
      >
        <RenderCardMedia
          component="img"
          mediaPath={"/images/vdsample.png"}
          width={"100%"}
        />

        {/* Read More About Us */}
        <Grid container justifyContent="center">
          <TransitionBox iy="-5rem" ay={0} ds={0.5}>
            <LabelSecondary>
              Master English on a Budget with ILBC EduPlus!
            </LabelSecondary>
          </TransitionBox>
        </Grid>
        <Box
          display="flex"
          width={"80%"}
          sx={{
            margin: "auto",
            marginTop: "21px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          ILBC EduPlus is an innovative English Learning Platform developed by
          ILBC to empower individuals worldwide in enhancing their English
          language skills. ILBC EduPlus offers a range of four products:
          One-on-One Private Class, One-to-Many Group Class, MOOC, and
          EduConnect. Learn anytime, anywhere, and achieve fluency without
          exceeding your budget. Begin your English journey with us today!
        </Box>
        <Box display="flex" sx={{ marginBottom: "46px" }}>
          <Box m="auto">
            <Link href="/about">
              <TransitionButton>
                <ButtonTransparent
                  width={157}
                  height={40}
                  border="1px solid #243C4F"
                >
                  Read More
                </ButtonTransparent>
              </TransitionButton>
            </Link>
          </Box>
        </Box>

        {/*  */}
        <Grid
          container
          sx={{
            paddingBottom: "37px",
            borderBottom: "1px solid #ddd",
          }}
          mt={17}
        >
          <Grid item xs={3}>
            <Item>
              <CountTextBlue>
                <CounterUp endVal={900} />
                k+
              </CountTextBlue>
              <label className="count-mini-title">online students</label>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CountTextBlue>
                <CounterUp endVal={20} />
              </CountTextBlue>
              <label className="count-mini-title">certified courses</label>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CountTextBlue>
                <CounterUp endVal={4} />
              </CountTextBlue>
              <label className="count-mini-title">main products</label>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <CountTextBlue>
                <CounterUp endVal={500} />+
              </CountTextBlue>
              <label className="count-mini-title">Expert Instructor</label>
            </Item>
          </Grid>
        </Grid>

        {/* Main Producst */}
        <MainProducts />
      </Container>

      {/* Choose Us/ Why Choose Edu+ */}
      <Grid
        container
        sx={{
          minHeight: "569px",
          backgroundImage: `url(${"/images/bgicon.png"})`,
          backgroundSize: "100%",
          padding: "5rem",
        }}
      >
        <ChooseEduplus />
      </Grid>

      {/* Founders */}
      <UiFounders />

      {/* Frequently ask questions */}
      <Grid
        container
        sx={{
          paddingTop: "85px",
          paddingBottom: "70px",
          textAlign: "center",
          background: "#EDE8FF",
        }}
      >
        <FaqsUi />
      </Grid>

      {/* Supported Platforms */}
      <SupportedPlatforms />
    </React.Fragment>
  );
}
