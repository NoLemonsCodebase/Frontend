import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoLemons.co - The online auction for car people, by car people",
  description: "The online auction for car people, by car people",
  icons: {
    icon: "/logo-web.webp",
  },
  metadataBase: new URL("https://nolemons.co/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5LKFJ76994" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5LKFJ76994');
        `}
      </Script>
      <Script id="snap-pixels">{`{
        (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
          {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
          a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
          r.src=n;var u=t.getElementsByTagName(s)[0];
          u.parentNode.insertBefore(r,u);})(window,document,
          'https://sc-static.net/scevent.min.js');
          
          snaptr('init', '89acb1a3-d93c-4de1-a78d-72168a70fdba');
      }`}</Script>
      <body className={inter.className}>
        <NextTopLoader />
        <Navbar />
        <a
          className="fixed z-10 bottom-0 right-0 h-8 mr-8 text-white px-4 text-sm font-semibold flex items-center justify-center"
          style={{ background: "#5a9e6f" }}
          href="https://wa.me/971564404640?text=Hi%21%20I%20am%20from%20NoLemons%20website.%20Could%20you%20please%20tell%20me%3A"
        >
          Chat with us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 icon icon-tabler icon-tabler-brand-whatsapp"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </a>
        {children}
      </body>
    </html>
  );
}
