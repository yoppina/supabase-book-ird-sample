import { NextConfig } from "next";
import { Configuration } from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      modules: [...(config.resolve?.modules || []), path.resolve("./src")],
    };
    return config;
  },
};

export default nextConfig;
