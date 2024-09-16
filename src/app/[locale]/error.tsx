"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex justify-center items-center flex-col gap-6 py-20">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}!</p>

      <button
        onClick={reset}
        className="inline-block bg-green-600  text-white px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
