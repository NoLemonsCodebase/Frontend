"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BeeWidget() {
  const pathname = usePathname();

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
    };

    // Check if document is already fully loaded
    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript, false);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("load", loadScript);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("getbeeCtaWrapper");
    if (el && pathname.includes("/bid")) {
      el.style.display = "none";
      return;
    }

    if (el) {
      el.style.display = "table";

      if (pathname.includes("/cars") || pathname.includes("/import-a-car")) {
        el.style.bottom = "70px";
      } else el.style.bottom = "10px";
    }
  }, [pathname]);

  return null; // No visible component, just loads the widget
}
