import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import ChatWithUsBtn from "@/components/chat-with-us-btn";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/icons/whatsapp";
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
      <GoogleTagManager gtmId="GTM-PTPTTBKT" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTPTTBKT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NextTopLoader />
        <a
          className="fixed z-10 bottom-0 right-0 h-8 mr-8 text-white px-4 text-sm font-semibold flex items-center justify-center space-x-2"
          style={{ background: "#5a9e6f" }}
          href="https://wa.me/971566633668?text=Hi%21%20I%20am%20from%20NoLemons%20website.%20Could%20you%20please%20tell%20me%3A"
        >
          <p>Chat with us</p>
          <WhatsappIcon />
        </a>
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
