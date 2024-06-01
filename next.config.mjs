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
};


const combinedConfig = withVideos(nextConfig);


export default combinedConfig;
