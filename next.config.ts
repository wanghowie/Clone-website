import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is only used by the Docker image; Node hosts such as Hostinger run `next start`.
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
};

export default nextConfig;
