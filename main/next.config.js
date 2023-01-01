const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextTranslate = require('next-translate');
const withPlugins = require('next-compose-plugins');

const publicRuntimeConfig = {
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // crossOrigin: 'anonymous',
  publicRuntimeConfig,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
        new NextFederationPlugin({
          name: 'main',
          remotes: {
            shared: `shared@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          // shared
        })
    );

    return config;
  },
}

const plugins = [
  [nextTranslate, {}],
];

module.exports = withPlugins(plugins, nextConfig);
