/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindcss.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.tokopedia.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
