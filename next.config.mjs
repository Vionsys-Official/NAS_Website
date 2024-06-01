import withVideos from 'next-videos';


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


const combinedConfig = withVideos(nextConfig);


export default combinedConfig;
