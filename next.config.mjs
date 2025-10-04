/** @type {import('next').NextConfig} */
const nextConfig = {output: "export", // Enables static exports
reactStrictMode: true, eslint:{ignoreDuringBuilds: true}, images: { unoptimized: true },
  basePath: "/octvinaa.github.io",
  assetPrefix: "/octvinaa.github.io/",};

export default nextConfig;
