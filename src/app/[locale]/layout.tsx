import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import ChatWithUsBtn from "@/components/chat-with-us-btn";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import RequestCar from "@/components/RequestCar";
import { useTextDirection } from "@/lib/hooks/useTextDirection";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({ children, params: { locale } }: any) {
  const messages = useMessages();
  const direction = useTextDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5LKFJ76994" />

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
      <Script id="clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "no5iqs9494");
        `}
      </Script>
      {/* google tag manager */}
      <GoogleTagManager gtmId="GTM-MCGBCL8D" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCGBCL8D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NextTopLoader />
        <NextIntlClientProvider messages={messages}>
          <RequestCar />
          {/* <Banner /> */}
          <Navbar />
          <ChatWithUsBtn />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      {/* google analytics */}
      <GoogleAnalytics gaId="G-5LKFJ76994" />
    </html>
  );
}
