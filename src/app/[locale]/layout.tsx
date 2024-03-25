import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import ChatWithUsBtn from "@/components/chat-with-us-btn";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useTextDirection } from "@/lib/hooks/useTextDirection";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoLemons.ae - The online auction for car people, by car people",
  description: "The online auction for car people, by car people",
  icons: {
    icon: "/logo-web.webp",
  },
  metadataBase: new URL("https://nolemons.co/"),
};

export default function LocaleLayout({ children, params: { locale } }: any) {
  const messages = useMessages();
  const direction = useTextDirection(locale);
  return (
    <html lang={"locale"} dir={direction}>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Banner />
          <Navbar />
          <ChatWithUsBtn />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
