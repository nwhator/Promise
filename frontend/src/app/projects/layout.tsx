import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Engineering Projects & Case Studies | Promise Nwhator',
    description: 'Explore the portfolio of Promise Nwhator, featuring systems architecture, medical journal infrastructure (OJS), and high-conversion SaaS products.',
    keywords: ['Software Engineering Case Study', 'SaaS Architecture Portfolio', 'OJS Clinical Journal Management'],
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
