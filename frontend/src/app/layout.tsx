import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "PROMISE NWHATOR | Full-Stack Software Engineer",
    template: "%s | PROMISE NWHATOR",
  },
  description:
    "Nwhator Promise portfolio: scalable systems, backend engineering, case studies, and technical blog posts built with Next.js, Django, and Supabase.",
  keywords: [
    "Nwhator Promise",
    "PROMISE NWHATOR",
    "Full-Stack Engineer",
    "Django",
    "Next.js",
    "Supabase",
    "Software Engineer Portfolio",
    "Backend Engineer",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
