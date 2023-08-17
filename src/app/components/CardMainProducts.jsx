import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function CardMainProduct({ bgGradient, imgUrl }) {
  return (
    <Card
      sx={{
        width: "264px",
        height: "264px",
        borderRadius: "25px",
        background: bgGradient,
        marginBottom: "20px",
        margin: "auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
          sx={{
            objectFit: "contain",
            borderRadius: "25px",
            position: "absolute",
            marginTop: "20%",
          }}
        />
      </CardActionArea>
    </Card>
  );
}
