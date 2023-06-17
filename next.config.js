const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  transpilePackages: ["@faire/web"],
  images: {
    domains: ["cdn.faire.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
