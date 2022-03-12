const withPWA = require('next-pwa')
/** @type {import('next').NextConfig} */

module.exports = withPWA({
  // reactStrictMode: true,
  lessLoaderOptions: {},
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
})
