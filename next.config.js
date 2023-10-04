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
  distDir: "build",
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
<<<<<<< HEAD
    domains: ["127.0.0.1", '154.49.136.99', 'localhost', 'www.api.localshop', "localshop", "api.localshop"]
=======
    domains: ["127.0.0.1", '154.49.136.99', 'api.localshop.lt', 'localhost', 'www.api.localshop', "localshop", "api.localshop"]
>>>>>>> 15dad38382b5b590505f4477609a3860f53136f5
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
