"use client";
import React,{useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";
import { useSession } from "next-auth/react";

export default function Navigation() {
  const sm = useMediaQuery("(max-width:767px)");
  const [sticky, setSticky] = React.useState(false);
  const { data: session, status } = useSession();
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, handle it here.
  //   },
  // })
  const [token, setToken] = useState({});
  //console.log(session, token)
  React.useEffect(() => {
    const addSticky = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", addSticky);
    setToken(window.localStorage.getItem("authTokenOwn"));
    return () => window.removeEventListener("scroll", addSticky);
  }, [sticky]);

  const menuItems = [
    { id: 1, name: "home", to: "" },
    { id: 2, name: "products", to: "products" },
    { id: 3, name: "news", to: "news" },
    // { id: 4, name: "faqs", to: 'faqs' },
  ];
// console.log(token)
  return (
    <React.Fragment>
      {sm ? (
        <MobileNav menuItems={menuItems} />
      ) : (
        <DesktopNav
          menuItems={menuItems}
          sticky={sticky}
          session={session}
          status={status}
          token={token}
        />
      )}
    </React.Fragment>
  );
}
