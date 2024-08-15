import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "The online auction for car people, by car people",
  icons: {
    icon: "/logo-web.webp",
  },
  metadataBase: new URL("https://nolemons.ae/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
