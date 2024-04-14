/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**'
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
    // removeConsole: {
    //   exclude: ['error']
    // }
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    });
    return cfg;
  }
};
