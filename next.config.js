/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
   images: {
    unoptimized: true, // Disable default image optimization
  },
  experimental: {
    outputFileTracing: true,
  },
  assetPrefix: isProd ? '/react-gh-pages/' : '',
  basePath: isProd ? '/react-gh-pages' : '',
  output: 'export'
 
  };
  
 module.exports = nextConfig;