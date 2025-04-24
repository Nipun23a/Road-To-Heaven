/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [],
    },
    experimental:{
        appDir:true,
    }
};

export default nextConfig;
