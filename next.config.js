/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    MAPBOX_API:
      'pk.eyJ1Ijoic2FjaGluOTg3OSIsImEiOiJjbDRmcDZjbW0wNWdzM2pxcXR1M21xaDFrIn0.Ez11RFErZnsAkcDDY5wRxQ',
  },
};

module.exports = nextConfig;
