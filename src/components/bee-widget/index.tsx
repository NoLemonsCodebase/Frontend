"use client";
import React, { useEffect } from "react";

const BeeWidget = () => {
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
      position: "left",
      spacing: "16px",
      bottomSpacing: "24px",
    };

    // Load external script
    const loadScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://iframe.getbee.com/dist/getbee.js";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript);
      return () => window.removeEventListener("load", loadScript);
    }
  }, []);

  return null; // No visible component, just loads the widget
};

export default BeeWidget;
