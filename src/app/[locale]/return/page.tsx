"use client";
import React, { useEffect, useState } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import SuccessMessage from "./seccess-message";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [urlAfterComplete, setUrlAfterComplete] = useState("/");

  const search_params = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (!search_params) return; // Early return if search_params is not available

    const sessionId = search_params.get("session_id") ?? "";

    async function getSession(sessionId: string) {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${sessionId}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const { session } = await res.json();
        setStatus(session.status);
        setUrlAfterComplete(session.metadata.url_after_complete);
        console.log(session);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    }
    getSession(sessionId);
  }, []);

  if (status === "open") {
    return redirect("/");
  }

  if (loading)
    return (
      <section className=" py-20 md:py-40 ">
        <div className=" py-10 flex flex-col items-center justify-center gap-6">
          <div className="loader-sppiner relative"></div>
          <p className=" text-xl">loading...</p>
        </div>
      </section>
    );

  if (status === "complete") {
    return (
      <section className=" py-20 md:py-40 ">
        <SuccessMessage urlAfterComplete={urlAfterComplete} />
      </section>
    );
  }

  return null;
}
