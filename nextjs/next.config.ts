import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    reactStrictMode: process.env.NEXT_ENV === "dev",
    env: {
        STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        STRAPI_TOKEN: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
        NEXT_ENV: process.env.NEXT_ENV,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "strapi.gabriaile.dev",
                port: "",
            },
        ],
        domains: ["localhost", "127.0.0.1"],
    },
    compress: true,
    bundlePagesRouterDependencies: true,
};

export default withNextIntl(nextConfig);
