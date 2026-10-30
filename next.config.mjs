import { PHASE_PRODUCTION_BUILD } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Export each page as <route>/index.html so the server returns the right HTML for every URL
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default (phase) => {
  // The contact and career forms send this token to the mail endpoint; without it they send "undefined".
  // `next lint` also loads the config in the build phase, so skip the check there.
  const isLint = process.argv.includes("lint");
  if (phase === PHASE_PRODUCTION_BUILD && !isLint && !process.env.NEXT_PUBLIC_TOKEN?.trim()) {
    throw new Error(
      "NEXT_PUBLIC_TOKEN is not set. Add it to .env before `npm run build`, or the contact and career forms will not send."
    );
  }
  return nextConfig;
};
