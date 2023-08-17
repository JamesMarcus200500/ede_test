"use client";
import React, { useEffect, useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavMenuItem from "./NavMenuItem";
import ButtonTransparent from "../components/ButtonTransparent";
import { useRouter } from "next/navigation";
import SelectInput from "../components/forms/SelectInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import {
  Button,
  Container,
  Dialog,
  Grid,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import LoginForm from "../(auth)/login/LoginForm";
import { LogoutOutlined, Person2 } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import RenderCircularProgress from "../components/RenderCircularProgress";
import sha256 from 'crypto-js/sha256';

export default function DesktopNav({
  menuItems,
  sticky,
  session,
  status,
  token,
}) {
  const sm = useMediaQuery("(max-width:767px)");
  const { push } = useRouter();
  const [user, setUser] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const menuRef = useRef(null);
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };
console.log(session)
  const handleLogout = (e) => {
    e.preventDefault();
    //signOut(auth);//firebase signOut Usage
    if(!session){
      localStorage.removeItem("authTokenOwn");
      push("/");
    }else{
      signOut({ callbackUrl: "/" }); //next-auth singOut
    localStorage.removeItem("authTokenOwn");
    }    
  };

  const handleClickOutside = (e) => {
    if (menuRef && !menuRef.current?.contains(e.target)) {
      setIsOpenMenu(false);
    }
  };

  React.useEffect(() => {
    //firebase credential check
    // const unsubscribe = onAuthStateChanged(auth, (currUser) =>
    //   setUser(currUser)
    // );
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let MainNav = menuItems.map((menuItem) => (
    <NavMenuItem key={menuItem.id} routeTo={menuItem.to}>
      {menuItem.name}
    </NavMenuItem>
  ));

  return (
    <Box
      //m="auto"
      sx={{
        minHeight: "148px",
        backgroundImage: `url(${"/images/bgicon.png"})`,
        backgroundSize: "100%"
      }}
    >
      <AppBar
        // color={sticky ? "primary" : "transparent"}
        //position={"fixed"}
        sx={{
          // position: isScrollUp ? "fixed" : "relative",
          bgcolor: sticky ? "white" : "transparent",
          boxShadow: "none",
          minHeight: "31px",
          //paddingX: "60px",
          paddingTop: sticky ? "2px" : "41px",
          boxShadow: sticky ? "2px 2px 10px #7a96ec" : " 0px 0px 0px #fff",
          transition: "padding-top 0.5s",
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1280px" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              //src="images/logo.png"
              src="https://eduplus-test.s3.ap-southeast-1.amazonaws.com/images/logo.png"
              onClick={() => push("/")}
              style={{ marginLeft: "-50px", zIndex: 99 }}
            />
            <Grid
              container
              justifyContent="center"
              sx={{ position: "absolute", left: 0 }}
            >
              {MainNav}
            </Grid>

            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "flex",
                  marginRight: "-48px",
                },
              }}
            >
              <SelectInput />
              {/* <NavMenuItem onClick={handleMenuClose} routeTo="login">  */}
              {status == "authenticated" || token ? (
                <>
                  <NavMenuItem key="favourite">
                    <FavoriteIcon sx={{ width: "21px" }} />
                  </NavMenuItem>
                  <NavMenuItem key="notification">
                    <NotificationsIcon sx={{ marginLeft: "-15px" }} />
                  </NavMenuItem>
                  <Box sx={{ position: "relative" }}>
                    <AccountCircleIcon
                      sx={{ fontSize: "3.5rem", cursor: "pointer" }}
                      onClick={() => setIsOpenMenu(!isOpenMenu)}
                    />
                    {isOpenMenu && (
                      <Stack
                        sx={{
                          position: "absolute",
                          bgcolor: "white",
                          right: 3,
                          p: 1,
                          borderRadius: "15px",
                        }}
                        ref={menuRef}
                      >
                        <Button
                          sx={{ px: 4 }}
                          startIcon={<Person2 />}
                          onClick={() => {
                            if (status == "authenticated" || token) {
                              push(`/profile/${sha256('userProfile')}`)
                            }
                          }}
                        >
                          Profile
                        </Button>
                        <Button
                          sx={{ px: 4 }}
                          startIcon={<LogoutOutlined />}
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </Stack>
                    )}
                  </Box>
                </>
              ) : status == "loading" ? (
                <Box
                  sx={{
                    width: "120px",
                    paddingTop: "15px",
                    paddingLeft: "60px",
                  }}
                >
                  <RenderCircularProgress size="1.5rem" />
                </Box>
              ) : status == "loading" ? (
                <Box
                  sx={{ width: "120px", paddingTop: "15px", paddingLeft: "60px" }}
                >
                  <RenderCircularProgress size="1.5rem" />
                </Box>
              ) : (
                <ButtonTransparent
                  size="large"
                  width={120}
                  height={50}
                  border="3px solid #42AAFF"
                  fontWeight="800"
                  sticky={sticky}
                  onClick={() => setShowLoginDialog(true)}
                >
                  Login
                </ButtonTransparent>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <LoginForm
        open={showLoginDialog}
        setShowLoginDialog={setShowLoginDialog}
      />
    </Box>
  );
}
