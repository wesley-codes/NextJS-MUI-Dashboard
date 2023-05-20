/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    esmExternals: 'loose', //--fix esm package issues
  },
};

module.exports = nextConfig;
