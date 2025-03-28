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
    eslint: {
        ignoreDuringBuilds: true,
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
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
        turbo: {
            resolveAlias: {
                "next-intl/config": "./path/to/i18n.ts",
                canvas: "./empty-module.ts",
            },
        },
    },
};

export default withNextIntl(nextConfig);
