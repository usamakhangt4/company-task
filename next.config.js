/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts/",
          publicPath: "/_next/static/fonts/",
          limit: 8192, // You can adjust the limit based on your font file size
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
