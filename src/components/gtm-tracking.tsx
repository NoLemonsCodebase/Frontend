"use client";

import { gtmPageView } from "@/lib/gtm";
import { useEffect } from "react";

export default function GtmTracking({ slug }: any) {
  useEffect(() => {
    if (slug) {
      const props = {
        pageTitle: slug,
      };
      gtmPageView(props);
    }
  }, [slug]);
  return null;
}
