import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  exportPathMap: async function(defaultPathMap) {
    const { ...paths } = defaultPathMap;
    
    // Удаляем API routes из экспорта
    Object.keys(paths).forEach(path => {
      if (path.startsWith('/api/')) {
        delete paths[path];
      }
    });
    
    return paths;
  },
};

export default nextConfig;
