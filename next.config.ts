/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ THIS disables all ESLint checks during build
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Optional: disables image optimization if needed
  },
};

export default nextConfig;
