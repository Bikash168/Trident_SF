/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml', // The route you want to serve the sitemap on
        destination: '/api/sitemap', // The API route that generates the sitemap
      },
    ];
  },
};

export default nextConfig;
