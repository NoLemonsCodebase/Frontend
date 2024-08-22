"use client";

import { gtmPageView } from "@/lib/gtm";
import { useEffect } from "react";

export default function GtmTracking({ slug }: any) {
  useEffect(() => {
    if (slug) {
      const props = {
        page_title: slug,
      };
      gtmPageView(props);
    }
  }, [slug]);
  return null;
}
