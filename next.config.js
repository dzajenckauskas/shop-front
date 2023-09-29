// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');

// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/uploads/:path*`
      }
    ]
  },
  images: {
    unoptimized: true,
    domains: ["127.0.0.1", '45.93.138.46', 'localhost', 'www.api.localshop', "localshop", "api.localshop"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  }
}

module.exports = nextConfig
