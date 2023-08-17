import { Box } from "@mui/material";
import { motion } from "framer-motion";

const TransitionButton = ({ children }) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </Box>
  );
};

export default TransitionButton;
