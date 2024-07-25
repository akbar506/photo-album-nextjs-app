/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
    rules: {
      "react/jsx-key": "off",
    },
  },
};

export default nextConfig;
