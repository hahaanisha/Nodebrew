import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  webpack: (config, { isServer }) => {
    // Add a rule to handle .lottie files
    config.module.rules.push({
      test: /\.lottie$/, // Target .lottie files
      use: [
        {
          loader: 'json-loader',
        },
      ],
      type: 'javascript/auto', // Ensure Webpack treats it as JSON
    });

    // Important: return the modified config
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
