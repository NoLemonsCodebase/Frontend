import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const domain_images = [
  "nolemons.ae",
  "nolemons.co",
  "i.postimg.cc",
  "nolemons.s3.amazonaws.com",
  "nolemons.s3.us-west-2.amazonaws.com",
  "api.typeform.com",
  "www.pcarmarket.com",
  "flagcdn.com",
];

const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: "058aa1afd2c8466e86b2644bee2e9f4a",
  },
  images: {
    remotePatterns: domain_images.map((domain) => ({
      protocol: "https",
      hostname: domain,
      pathname: "**",
    })),
  },
  redirects: async () => {
    return [
      // {
      //   source: "/cayman-gt4",
      //   destination: "/cars/22",
      //   permanent: false,
      // },
      // {
      //   source: "/cars/auction",
      //   destination: "/cars/22",
      //   permanent: false,
      // },
    ];
  },
};

export default withNextIntl(nextConfig);
