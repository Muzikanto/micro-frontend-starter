const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextTranslate = require('next-translate');

const publicRuntimeConfig = {
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['internal'],
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  crossOrigin: undefined, // 'anonymous',
  publicRuntimeConfig,
  assetPrefix: process.env.ASSET_PREFIX,
  images: {
    loaderFile: undefined,
  },
  amp: {
    canonicalBase: undefined,
  },
  experimental: {
    appDir: false,
    outputFileTracingRoot: undefined,
  },

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
};

const plugins = [nextTranslate];

module.exports = (_phase, { defaultConfig }) => {
  delete defaultConfig.webpackDevMiddleware;
  delete defaultConfig.configOrigin;
  delete defaultConfig.target;

  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig });
};
