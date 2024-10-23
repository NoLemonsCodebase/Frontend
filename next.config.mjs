import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

// all domains are accepted
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**", pathname: "**" }],
  },
};

export default withNextIntl(nextConfig);
