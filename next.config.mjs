import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const domain_images = [
  "cdn.elferspot.com",
  "www.elferspot.com",
  "www.builtforbackroads.com",
  "www.kickdown.com",
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
  images: {
    remotePatterns: domain_images.map((domain) => ({
      protocol: "https",
      hostname: domain,
      pathname: "**",
    })),
  },
};

export default withNextIntl(nextConfig);
