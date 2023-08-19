/** @type {import('next').NextConfig} */
/* https://github.com/vercel/next.js/issues/44430 */
const path = require("path");
const nextConfig = {
  //output: "export",
  trailingSlash: true,
  images: {
    domains: ["flagcdn.com"],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
};

module.exports = nextConfig;
