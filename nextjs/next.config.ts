import path from 'path';
import { fileURLToPath } from 'url';
import {NextConfig} from "next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    reactStrictMode: process.env.NEXT_ENV === 'dev',
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
                protocol: 'https',
                hostname: 'strapi.gabriaile.dev',
                port: '',
            },
        ],
    },
    compress: true,
    bundlePagesRouterDependencies: true,
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: 'bottom-right',
    },
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
        turbo: {
            resolveAlias: {
                'next-intl/config': './path/to/i18n.ts',
                canvas: './empty-module.ts',
            },
        }
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig);