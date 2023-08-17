import { Box } from "@mui/material";
import { motion } from "framer-motion";

const TransitionBox = ({
  children,
  ix = 0,
  ax = 0,
  iy = 0,
  ay = 0,
  ds = 0.8,
  iniScale = 1,
  aniScale = 1,
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: ix, y: iy, scale: iniScale }}
      /* animate={{ opacity: 1, x: ax, y: ay }} */
      whileInView={{ x: ax, opacity: 1, y: ay, scale: aniScale }}
      transition={{
        duration: ds,
        delay: 0.3,
        type: "tween",
      }}
      viewport={{ once: true }}
      margin={0}
      padding={0}
    >
      {children}
    </Box>
  );
};

export default TransitionBox;
