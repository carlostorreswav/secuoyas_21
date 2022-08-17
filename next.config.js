/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.js", "api.js"],
  rewrites: async () => {
    return [
      {
        source: "/api/(.*)",
        destination: "/api",
      },
    ]
  },
}

module.exports = nextConfig
