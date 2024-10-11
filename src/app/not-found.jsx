import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-emerald-500">404</h1>
          <p className="mb-4 text-lg text-dark">
            Oops! Looks like you're lost.
          </p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <Link
            href="/"
            class="mt-4 inline-block rounded bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-500"
          >
            {" "}
            Go back to Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
