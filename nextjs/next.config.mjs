/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        STRAPI_TOKEN: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
