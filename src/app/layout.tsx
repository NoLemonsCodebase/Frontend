import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import WhatsappIcon from "@/components/icons/whatsapp";

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
      <Script id="meta-pixels">
        {`
          <!-- Meta Pixel Code -->
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1433213310911440');
          <!-- End Meta Pixel Code -->
        `}
      </Script>
      <body className={inter.className}>
        <NextTopLoader />
        <Navbar />
        <a
          className="fixed z-10 bottom-0 right-0 h-8 mr-8 text-white px-4 text-sm font-semibold flex items-center justify-center space-x-2"
          style={{ background: "#5a9e6f" }}
          href="https://wa.me/971566633668?text=Hi%21%20I%20am%20from%20NoLemons%20website.%20Could%20you%20please%20tell%20me%3A"
        >
          <p>Chat with us</p>
          <WhatsappIcon />
        </a>
        {children}
      </body>
    </html>
  );
}
