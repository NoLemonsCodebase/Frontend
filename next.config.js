/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nolemons.ae", "i.postimg.cc"],
  },
  redirects: async () => {
    return [
      {
        source: "/cayman-gt4",
        destination: "/cars/22",
        permanent: false,
      },
      {
        source: "/cars/auction",
        destination: "/cars/22",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
