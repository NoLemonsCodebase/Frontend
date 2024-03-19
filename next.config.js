const withNextIntl = require("next-intl/plugin")();
const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools(
  withNextIntl({
    env: {
      NEXT_PUBLIC_BUILDER_API_KEY: "b21829d09ece466ca4dae638f3c49bbb",
    },
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
  })
);

module.exports = nextConfig;
