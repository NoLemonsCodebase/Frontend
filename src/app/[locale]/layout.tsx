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

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

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
          {/* <Banner /> */}
          <div className="bg-yellow-50">
            <div className="py-2 md:py-3 lg:py-4">
              <div className="container flex items-center justify-center px-4 md:px-6">
                <div className="flex items-center space-x-4 text-yellow-600 dark:text-yellow-400">
                  <TruckIcon className="h-4 w-4" />
                  <span className="text-sm font-semibold">Free car shipping on first delivery</span>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
          <ChatWithUsBtn />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

