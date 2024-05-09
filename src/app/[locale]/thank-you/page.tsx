/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z6TWOHe8niE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 text-center">
        <ThumbsUpIcon className="h-16 w-16 text-green-500" />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">Thank you!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            We received your request.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

function ThumbsUpIcon(props: any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}