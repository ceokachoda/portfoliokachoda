import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-ink-950 px-6 text-center text-white">
      <div className="max-w-md">
        <p className="text-xs uppercase tracking-[0.36em] text-blossom-300">404</p>
        <h1 className="mt-4 font-display text-4xl">Signal Lost</h1>
        <p className="mt-4 text-sm leading-7 text-white/64">
          This route is not part of the current foundation.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.07] px-5 text-sm text-white transition hover:border-blossom-300/60 hover:text-blossom-100"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
