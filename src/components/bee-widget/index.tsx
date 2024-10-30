"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BeeWidget() {
  const pathname = usePathname();
  const [predictPageLoad, setPredictPageLoad] = useState<number>(0);

  useEffect(() => {
    // Widget configuration
    window.getbeeWidgetConf = {
      tenant: "nolemons",
      infoBox: {
        isEnabled: true,
        text: "Shop with our team",
        timer: 5000,
      },
      cta: {
        type: "image",
        image: {
          imageUrl: "https://getbee.blob.core.windows.net/widget/nolemon.png",
        },
      },
      showCta: true,
      position: "right",
      spacing: "16px",
      bottomSpacing: "10px",
    };

    // Load external script
    const loadScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://iframe.getbee.com/dist/getbee.js";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(script, firstScriptTag);
      script.onload = () => {
        setPredictPageLoad((p) => p + 1);
      };
    };

    // Check if document is already fully loaded
    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript, false);
    }

    return () => {
      window.removeEventListener("load", loadScript);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("getbeeCtaWrapper");
    if (el) {
      if (
        pathname.includes("/bid") ||
        pathname.includes("/sell-your-car") ||
        pathname.includes("/request-a-car") ||
        pathname.includes("/payment-success")
      ) {
        // to hide the button
        el.style.display = "none";
        // console.log("HI");
      } else {
        //to display the button
        el.style.display = "table";
      }

      if (pathname.includes("/cars") || pathname.includes("/import-a-car")) {
        el.style.bottom = "70px";
      } else el.style.bottom = "10px";
    }
  }, [pathname, predictPageLoad]);

  return null; // No visible component, just loads the widget
}
