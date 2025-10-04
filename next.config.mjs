/** @type {import('next').NextConfig} */
const nextConfig = {output: "export", // Enables static exports
reactStrictMode: true, eslint:{ignoreDuringBuilds: true}, images: { unoptimized: true },
  basePath: "/nama-repo-kamu",
  assetPrefix: "/nama-repo-kamu/",};

export default nextConfig;
