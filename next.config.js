const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  images: {
    domains: [
      "nolemons.ae",
      "i.postimg.cc",
      "nolemons.s3.us-west-2.amazonaws.com",
    ],
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
});

module.exports = nextConfig;
