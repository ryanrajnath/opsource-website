"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-slate-500 mb-6">
          We hit an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-orange-action text-white font-semibold rounded-lg hover:bg-orange-action-dark transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
