/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)', // Match all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://www.youtube.com; script-src 'self' 'unsafe-inline' https://www.youtube.com; object-src 'none';",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
