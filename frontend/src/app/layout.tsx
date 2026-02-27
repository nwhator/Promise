import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "PROMISE NWHATOR | Full-Stack Software Engineer",
    template: "%s | PROMISE NWHATOR",
  },
  description:
    "Nwhator Promise portfolio: scalable systems, backend engineering, case studies, and technical blog posts built with Next.js and Supabase.",
  keywords: [
    "Nwhator Promise",
    "PROMISE NWHATOR",
    "Full-Stack Engineer",
    "Next.js",
    "Supabase",
    "Software Engineer Portfolio",
    "Backend Engineer",
    "FastAPI",
    "Python",
  ],
  authors: [{ name: "Nwhator Promise" }],
  creator: "Nwhator Promise",
  publisher: "Nwhator Promise",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "PROMISE NWHATOR | Full-Stack Software Engineer",
    description:
      "Portfolio, architecture case studies, and engineering blog by Nwhator Promise.",
    url: "/",
    siteName: "PROMISE NWHATOR",
    images: [
      {
        url: "/promise-nwhator-logo.svg",
        width: 1200,
        height: 630,
        alt: "PROMISE NWHATOR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROMISE NWHATOR | Full-Stack Software Engineer",
    description:
      "Portfolio, architecture case studies, and engineering blog by Nwhator Promise.",
    images: ["/promise-nwhator-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/*
       * The stitch_promise_portfolio pages load Tailwind CDN and Google Fonts
       * from within their injected HTML bodies. This base layout intentionally
       * keeps the <head> minimal so those external assets can co-exist.
       */}
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
