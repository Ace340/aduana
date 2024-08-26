/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, 
    images: { unoptimized: true }, // Optional: Adds a trailing slash to URLs
  };
  
  export default nextConfig;
  