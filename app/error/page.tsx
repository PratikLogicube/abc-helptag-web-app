"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const params = useSearchParams();
  const message = params.get("message") || "Unknown error occurred";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-2">Sign In Error</h1>
      <p className="text-gray-700 mb-4">{decodeURIComponent(message)}</p>
      <Link href="/login" className="text-blue-600 underline">
        Back to Login
      </Link>
    </div>
  );
}
