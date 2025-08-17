import type { NextConfig } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
    experimental: {
        ppr: "incremental",
    },
};

export default nextConfig;
