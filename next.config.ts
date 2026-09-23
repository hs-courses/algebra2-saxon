import type { NextConfig } from "next";

const isGhPagesExport = process.env.GH_PAGES_EXPORT === "true";
const basePath = process.env.GH_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = isGhPagesExport
  ? {
      output: "export",
      basePath,
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
