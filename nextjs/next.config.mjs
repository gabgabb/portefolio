/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
