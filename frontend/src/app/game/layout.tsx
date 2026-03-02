import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tic-Tac-Toe Game | Promise Nwhator',
    description: "Play an interactive Tic-Tac-Toe game on the portfolio of Promise Nwhator, a systems architect and backend lead.",
};

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
