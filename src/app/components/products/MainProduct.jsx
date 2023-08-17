import { Box, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const MainProduct = ({ product }) => {
  return (
    <Link
      href={`/products/${product.linkTo}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          background: product.bgcolor,
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          display: "flex",
          flexDirection: "column",
          borderRadius: "25px",
          width: 254,
          height: 264,
          transition: "background 1s",
          "&:hover": {
            background: product.hovercolor,
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          sx={{
            width: product.id === 1 || product.id === 3 ? 160 : 100,
            height: "auto",
            backgroundSize: "contain",
          }}
        ></CardMedia>
        <Typography
        // sx={{
        //   textDecoration: "none",
        //   "& .MuiTypography-root": {
        //     textDecoration: "none",
        //   },
        // }}
        >
          {product.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default MainProduct;
