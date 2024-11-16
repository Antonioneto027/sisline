/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
   images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/react-gh-pages.git/' : '',
  basePath: isProd ? '/react-gh-pages.git' : '',
  output: 'export'
 
  };
  
 module.exports = nextConfig;