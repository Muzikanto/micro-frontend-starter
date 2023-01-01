const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
// const deps = require('./package.json');

const shared = {
  // ...deps.dependencies,
  react: {
    singleton: true,
    requiredVersion: false,
  },
  'react/': {
    singleton: true,
    requiredVersion: false,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: false,
  },
  'next/dynamic': {
    requiredVersion: false,
    singleton: true,
  },
  'next/link': {
    requiredVersion: false,
    singleton: true,
  },
  'next/router': {
    requiredVersion: false,
    singleton: true,
  },
  'next/script': {
    requiredVersion: false,
    singleton: true,
  },
  'next/head': {
    requiredVersion: false,
    singleton: true,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
        new NextFederationPlugin({
          name: 'shared',
          remotes: {
            // next1: `next1@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './shared-component': './src/components/SharedComponent',
          },
          // shared,
        })
    );

    return config;
  },
}

module.exports = nextConfig;
