"use client";
import { TrackPageView } from "@/lib/services/pixels";
import { useEffect } from "react";

export default function TrackPageViewCom() {
  useEffect(() => {
    TrackPageView();
  }, []);

  return null;
}
