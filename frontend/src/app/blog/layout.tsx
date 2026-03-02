import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Publications & Engineering Blog | Promise Nwhator',
    description: "Official engineering blog of Promise Nwhator, focusing on systems architecture, OJS platform engineering, and server-side performance optimization.",
    keywords: ['Software Architecture Blog', 'Next.js Performance Tips', 'OJS Maintenance Guide'],
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
