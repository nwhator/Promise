import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Promise Nwhator | Systems Architect & Backend Lead",
    template: "%s | Promise Nwhator",
  },
  description:
    "Official portfolio of Promise Nwhator, a Systems Architect and Backend Lead specializing in Next.js, OJS, Node.js, and scalable digital infrastructure.",
  keywords: [
    "Promise Nwhator",
    "Promise Ayobami Nwhator",
    "Systems Architect Nigeria",
    "Backend Lead",
    "Next.js Developer",
    "OJS Specialist",
    "Academic Journal Infrastructure",
    "Software Engineer Nigeria",
    "PHP Developer",
    "Full-Stack Software Engineer",
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Promise Nwhator",
                "alternateName": "Promise Ayobami Nwhator",
                "url": "https://nwhator.com",
                "image": "https://nwhator.com/me.jpeg",
                "jobTitle": "Systems Architect & Backend Lead",
                "sameAs": [
                  "https://github.com/nwhator",
                  "https://linkedin.com/in/nwhator",
                ],
                "description": "Systems Architect and Backend Lead specializing in scalable digital infrastructure, Next.js, and OJS."
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
