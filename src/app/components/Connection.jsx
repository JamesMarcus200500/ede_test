'use client'
import { Warning } from "@mui/icons-material";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  //console.log(isConnected);
  console.log(window.navigator.onLine);

  const statusUpdate = (isOnline) => {
    // setIsConnected(isOnline);
  };

  useEffect(() => {
    window.addEventListener("online", statusUpdate(true));
    window.addEventListener("offline", statusUpdate(false));
    return () => {
      window.removeEventListener("online", statusUpdate);
      window.removeEventListener("offline", statusUpdate);
    };
  }, []);

  return (
    <Box position={"fixed"} zIndex={10} bottom={3} right={3}>
      {isConnected ? (
        <Snackbar
          open={isOpen}
          autoHideDuration={3000}
          onClose={() => setIsOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={{ width: "200px" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Connected
          </Alert>
        </Snackbar>
      ) : (
        <Typography
          sx={{
            px: 3,
            py: 2,
            borderRadius: 2,
            bgcolor: "#DC3545",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Warning />
          Connection lost!
        </Typography>
      )}
    </Box>
  );
};

export default ConnectionStatus;
