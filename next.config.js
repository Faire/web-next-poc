const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["cdn.faire.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
