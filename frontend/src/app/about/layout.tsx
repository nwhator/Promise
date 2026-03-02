import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Promise Nwhator | Systems Architect & Backend Lead',
    description: 'Learn about Promise Nwhator, a veteran Systems Architect and Backend Lead with a decade of experience in engineering high-performance digital infrastructure.',
    keywords: ['Promise Nwhator Bio', 'Software Engineering Leadership', 'Systems Architecture Expertise'],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
