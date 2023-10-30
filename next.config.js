/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.photos'
      }
    ],
    domains: ['https://picsum.photos/']
  },

  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
