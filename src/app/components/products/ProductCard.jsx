import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useState } from "react";
import { motion } from "framer-motion";
// import productImage from "../../utils/image/product.png";

export default function ProductCard({ price }) {
  // #fe6386
  const [favorite, setFavorite] = useState(false);
  const variants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 1,
      delay: 2,
    },
  };
  return (
    <Card
      sx={{
        maxWidth: 259,
        MinHeight: 354,
        borderRadius: 5,
      }}
      component={motion.div}
      whileInView="whileInView"
      initial="initial"
      transition="transition"
      whileHover={{ scale: 1.1 }}
      layout
      viewport={{ once: true }}
      variants={variants}
    >
      <CardMedia
        sx={{ height: 140, margin: "17px", borderRadius: 3 }}
        image={
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
        title="course image"
      />
      <CardContent bgcolor="">
        <Box display="flex" alignItems="start">
          <Typography
            gutterBottom
            variant=""
            sx={{
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "start",
              "&:hover": {
                color: "#42aaff",
              },
            }}
          >
            Introduction to English Grammer
          </Typography>

          {favorite ? (
            <IconButton
              onClick={() => setFavorite(false)}
              component={motion.button}
              whileTap={{ scale: 1.1 }}
            >
              <Favorite
                // color={`${price ? "error" : "primary"}`}
                sx={{
                  color: `${price ? "#BE3455" : "#0055a6"}`,
                }}
              />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setFavorite(true)}
              component={motion.button}
              whileTap={{ scale: 1.1 }}
            >
              <FavoriteBorder
                color={`${price ? "error" : "primary"}`}
                sx={{ fontWeight: "light" }}
              />
            </IconButton>
          )}
        </Box>
      </CardContent>
      <Box display="flex" justifyContent="space-between" m="17px">
        <Box>
          <Box
            sx={{ fontWeight: "400", fontSize: "14px" }}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <AutoStoriesIcon fontSize="14px" /> 26 lessons
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{ fontWeight: "400", fontSize: "14px", mt: 1 }}
            gap={1}
          >
            <WatchLaterIcon fontSize="14px" /> 21 hours
          </Box>
        </Box>
        {price > 0 ? (
          <Typography color="#BE3455">{price} MMK</Typography>
        ) : (
          <Typography
            sx={{
              width: "63px",
              height: "23px",
              backgroundColor: "#0055A6",
              color: "white",
              fontWeight: "bold",
              mr: -3,
              px: 1,
              borderRadius: 3,
            }}
          >
            Free
          </Typography>
        )}
      </Box>

      <Button
        component={motion.button}
        whileTap={{ scale: 1.2 }}
        size="small"
        variant="outlined"
        color={`${price ? "error" : "primary"}`}
        sx={{
          borderRadius: 5,
          px: 2,
          py: 1,
          mr: 2,
          mb: 2,
          border: 1,
          float: "right",
        }}
      >
        Join Now
      </Button>
    </Card>
  );
}
