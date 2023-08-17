import { Box, Button, Input, Link, TextField, Typography } from "@mui/material";
import React from "react";
import TextInput from "./TextInput";

const LoginForm = () => {
  return (
    <>
      <Box
        sx={{
          width: 745,
          height: 500,
          backgroundImage: "url(images/bgicon.png)",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: 338,
            height: 500,
            bgcolor: "#217FCE",
            padding: "34px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            gap: 5,
            color: "#fff",
            // alignItems: "flex-start",
          }}
        >
          <Typography variant="h4">Login Form</Typography>
          <Typography sx={{ textAlign: "justify", pr: "80px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum
            maiores esse asperiores, dolores excepturi quod minus iste! Itaque,
            error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            ipsum maiores esse asperiores, dolores excepturi quod minus iste!
            Itaque, error. Lorem ipsum dolor
          </Typography>
        </Box>
        <Box
          sx={{
            width: 304,
            height: 339,
            bgcolor: "#FDFDFD",
            ml: -10,
            borderRadius: "25px",
            p: "34px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            sx={{ width: "100%", mt: 3 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", mt: 3 }}
          />
          <Link sx={{ mt: 1 }}>Forget Password?</Link>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              sx={{ width: 120, height: 38, marginX: "auto" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
