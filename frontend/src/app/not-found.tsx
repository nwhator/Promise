import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111621] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-black text-[#2463eb] mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">
          System Path Not Found
        </h1>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2463eb] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/pages"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            View All Pages
          </Link>
        </div>
      </div>
    </main>
  );
}