/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      }
    ]
  }
};

export default nextConfig;
