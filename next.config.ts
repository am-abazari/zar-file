import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/upload",
        destination: "/file",
        permanent: true,
      },
      {
        source: "/files",
        destination: "/file",
        permanent: true,
      },
      {
        source: "/download",
        destination: "/file",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
