"use client";
import React from "react";
import { MenuItem } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function NavMenuItem({ children, routeTo }) {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <MenuItem
      color=""
      sx={{
        textTransform: "capitalize",
        fontSize: "17px",
        fontFamily: "Raleway",
        fontWeight: "800",
        borderBottom: `${
          currentPath.split("/")[1] === routeTo ? "2px solid #217fce" : ""
        }`,
        transition: "borderBottom 2s",
        marginLeft: "8px",
        marginRight: "8px",
      }}
      // selected={currentPath.split("/")[1] === routeTo}'/dsfas'
      onClick={() => router.push(`/${routeTo}`)}
    >
      {children}
    </MenuItem>
  );
}
