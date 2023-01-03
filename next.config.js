/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  // async redirects() {
  //   return [{ source: "/api/login", destination: "/login", permanent: false }];
  // },
};

module.exports = nextConfig;
