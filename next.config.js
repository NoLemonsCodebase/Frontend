/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nolemons.ae", "i.postimg.cc"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/cars/auction",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
