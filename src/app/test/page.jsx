// "use client";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValue,
//   Variants,
// } from "framer-motion";
// import { Box, Button, duration, Typography } from "@mui/material";
// import { useRef, useState } from "react";
// import LoginForm from "../components/forms/LoginForm";
// import ProductCard from "../components/products/ProductCard";

// const Page = () => {
//   const [open, setOpen] = useState(false);
//   const x = useMotionValue();
//   console.log(x);
//   const variants = {
//     initial: {
//       x: 100,
//       opacity: 0.3,
//     },
//     animate: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: {
//       x: 300,
//       opacity: 0,
//     },
//   };
//   const ggvarient = {
//     initial: { opacity: 0.3 },
//     animate: { opacity: 1 },
//   };

//   return (
//     <Box padding={7}>
//       <AnimatePresence>
//         {open ? (
//           <Box
//             sx={{ width: 300, height: 300, bgcolor: "black" }}
//             component={motion.div}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{
//               type: "tween",
//               // duration: 1,
//             }}
//             variants={variants}
//             style={{ x }}
//           >
//             <Typography
//               variant={ggvarient}
//               component={motion.p}
//               sx={{ bgcolor: "#efefef" }}
//             >
//               hello
//             </Typography>
//           </Box>
//         ) : (
//           ""
//         )}
//       </AnimatePresence>
//       <Button onClick={() => setOpen(!open)}>Toggle</Button>
//       <LoginForm />
//       <Box
//         display="flex"
//         alignItems="center"
//         width="1200px"
//         justifyContent="center"
//         gap={3}
//       >
//         {/* <Box
//           component={motion.div}
//           initial={{ x: -100 }}
//           whileInView={{ x: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProductCard />
//         </Box> */}
//         <Box
//           component={motion.div}
//           initial={{ y: -100 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProductCard />
//         </Box>

//         <Box
//           component={motion.div}
//           initial={{ y: 100 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProductCard />
//         </Box>

//         <Box
//           component={motion.div}
//           initial={{ y: -100 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProductCard />
//         </Box>
//         <Box
//           component={motion.div}
//           initial={{ x: 100 }}
//           whileInView={{ x: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProductCard />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Page;
"use client";
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const userData = { email, password };
  const loginHandler = async (userData) => {
    // console.log(userData);
    const { data } = await axios.post(
      "http://54.251.187.226/api/admin/login",
      userData
    );
    console.log(data);
  };
  return (
    <div className="">
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setpassword(e.target.value)} />
      <button onClick={() => loginHandler(userData)}>login</button>
    </div>
  );
};

export default Page;
