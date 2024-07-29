import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import ChatWithUsBtn from "@/components/chat-with-us-btn";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useTextDirection } from "@/lib/hooks/useTextDirection";
import Banner from "@/components/Banner";
import RequestCar from "@/components/RequestCar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "The online auction for car people, by car people",
  icons: {
    icon: "/logo-web.webp",
  },
  metadataBase: new URL("https://nolemons.ae/"),
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
      <Script id="google-tag-manager">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTPTTBKT');
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
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTPTTBKT"
        height="0" width="0" className="display:none;visibility:hidden"></iframe></noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RequestCar />
          {/* <Banner /> */}
          <Navbar />
          <ChatWithUsBtn />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

