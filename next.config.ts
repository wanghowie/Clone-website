import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is only used by the Docker image; Node hosts such as Hostinger run `next start`.
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
  async redirects() {
    return [
      {
        // Send the bare domain to the canonical www host.
        source: "/:path*",
        has: [{ type: "host", value: "visitdauin.com" }],
        destination: "https://www.visitdauin.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
