"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";
import NavMenuItem from "./NavMenuItem";
import AppBar from "@mui/material/AppBar";

export default function MobileNav({ menuItems }) {
  const [state, setState] = React.useState(false);

  const MainNavMobile = menuItems.map((menuItem) => (
    <>
      <ListItem>
        <NavMenuItem key={menuItem.id} routeTo={menuItem.to}>
          {menuItem.name}
        </NavMenuItem>
      </ListItem>
      <Divider />
    </>
  ));

  return (
    <React.Fragment key={"left"}>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex-start", md: "flex-end" } }}>
              <Button onClick={() => setState(true)}>
                <MenuIcon color="primary" sx={{ fontSize: 40 }} />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        {/* menus */}
        <Box
          sx={{ width: "left" === "top" || "left" === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={() => setState(false)}
          onKeyDown={() => setState(false)}
        >
          <List>
            {MainNavMobile}
            <ListItem>
              <NavMenuItem routeTo="login">login</NavMenuItem>
            </ListItem>
          </List>
        </Box>
        {/* #menus */}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
