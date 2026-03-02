"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogChrome } from '@/components/BlogChrome';

type Player = 'X' | 'O' | null;

export default function Game() {
    const [activeGame, setActiveGame] = useState<'TicTacToe' | 'Memory' | null>(null);

    return (
        <BlogChrome>
            <div className="flex flex-col items-center py-20 px-4 min-h-screen">
                <AnimatePresence mode="wait">
                    {!activeGame ? (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="max-w-4xl w-full text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground">
                                The <span className="text-gradient-primary">Playground</span>
                            </h1>
                            <p className="text-foreground/60 font-light max-w-lg mx-auto mb-16">
                                Interactive logic challenges designed for zero-latency performance.
                                Choose your environment.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Tic Tac Toe Card */}
                                <motion.button
                                    whileHover={{ y: -10 }}
                                    onClick={() => setActiveGame('TicTacToe')}
                                    className="group relative flex flex-col bg-surface border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 text-left p-8 shadow-2xl"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl font-black">grid_3x3</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground mb-3">Tic Tac Toe</h3>
                                    <p className="text-foreground/50 text-sm font-light leading-relaxed mb-8">
                                        Face off against a high-performance Minimax AI or challenge a friend in a local session.
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-xs font-black text-primary tracking-widest uppercase">
                                        Initialize System <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                        <span className="material-symbols-outlined text-[12rem] font-black">grid_3x3</span>
                                    </div>
                                </motion.button>

                                {/* Memory Game Card */}
                                <motion.button
                                    whileHover={{ y: -10 }}
                                    onClick={() => setActiveGame('Memory')}
                                    className="group relative flex flex-col bg-surface border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 text-left p-8 shadow-2xl"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl font-black">psychology</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground mb-3">Memory Match</h3>
                                    <p className="text-foreground/50 text-sm font-light leading-relaxed mb-8">
                                        Test your pattern recognition and memory speed with our tech-stack icon collection.
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-xs font-black text-accent tracking-widest uppercase">
                                        Sync Tokens <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                        <span className="material-symbols-outlined text-[12rem] font-black">psychology</span>
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="game-active"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="w-full flex flex-col items-center"
                        >
                            <button
                                onClick={() => setActiveGame(null)}
                                className="mb-12 flex items-center gap-2 text-xs font-bold text-foreground/40 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Selection
                            </button>
                            {activeGame === 'TicTacToe' ? <TicTacToe /> : <MemoryGame />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </BlogChrome>
    );
}

/* ──────────────────────────────────────────────────────────
   TIC TAC TOE COMPONENT (With Minimax AI)
   ────────────────────────────────────────────────────────── */

function TicTacToe() {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState<Player | 'Draw'>(null);
    const [winningLine, setWinningLine] = useState<number[] | null>(null);
    const [gameMode, setGameMode] = useState<'PvP' | 'PvCPU'>('PvCPU');

    const checkWinner = (squares: Player[]) => {
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: [a, b, c] };
            }
        }
        if (squares.every(s => s !== null)) return { winner: 'Draw' as const, line: null };
        return null;
    };

    const minimax = useCallback((squares: Player[], depth: number, isMaximizing: boolean): number => {
        const result = checkWinner(squares);
        if (result?.winner === 'O') return 10 - depth;
        if (result?.winner === 'X') return depth - 10;
        if (result?.winner === 'Draw') return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'O';
                    const score = minimax(squares, depth + 1, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'X';
                    const score = minimax(squares, depth + 1, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }, []);

    useEffect(() => {
        if (gameMode === 'PvCPU' && !isXNext && !winner) {
            const timer = setTimeout(() => {
                let bestScore = -Infinity;
                let move = -1;
                const currentBoard = [...board];
                for (let i = 0; i < 9; i++) {
                    if (!currentBoard[i]) {
                        currentBoard[i] = 'O';
                        const score = minimax(currentBoard, 0, false);
                        currentBoard[i] = null; // reset
                        if (score > bestScore) {
                            bestScore = score;
                            move = i;
                        }
                    }
                }
                if (move !== -1) {
                    const newBoard = [...board];
                    newBoard[move] = 'O';
                    setBoard(newBoard);
                    setIsXNext(true);
                }
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isXNext, board, winner, gameMode, minimax]);

    useEffect(() => {
        const result = checkWinner(board);
        if (result) {
            setWinner(result.winner);
            setWinningLine(result.line);
        }
    }, [board]);

    const reset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setWinningLine(null);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4 mb-8">
                <button onClick={() => { setGameMode('PvCPU'); reset(); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${gameMode === 'PvCPU' ? 'bg-primary border-primary text-white' : 'bg-surface border-border text-foreground/40'}`}>MINIMAX AI (HARD)</button>
                <button onClick={() => { setGameMode('PvP'); reset(); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${gameMode === 'PvP' ? 'bg-primary border-primary text-white' : 'bg-surface border-border text-foreground/40'}`}>LOCAL PvP</button>
            </div>

            <div className="grid grid-cols-3 gap-4 relative">
                {board.map((sq, i) => (
                    <motion.button
                        key={i}
                        whileHover={!winner && !sq ? { scale: 1.05 } : {}}
                        whileTap={!winner && !sq ? { scale: 0.95 } : {}}
                        onClick={() => { if (!board[i] && !winner && (gameMode === 'PvP' || isXNext)) { const nb = [...board]; nb[i] = isXNext ? 'X' : 'O'; setBoard(nb); setIsXNext(!isXNext); } }}
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-2 flex items-center justify-center text-4xl md:text-5xl font-black transition-all ${sq === 'X' ? 'text-primary' : 'text-accent'} ${winningLine?.includes(i) ? 'bg-primary/20 border-primary shadow-xl z-10' : 'bg-surface border-border shadow-md'}`}
                    >
                        <AnimatePresence>{sq && <motion.span initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}>{sq}</motion.span>}</AnimatePresence>
                    </motion.button>
                ))}
                <AnimatePresence>
                    {winner && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-[3rem] z-20">
                            <h2 className="text-4xl font-black mb-6 text-foreground">{winner === 'Draw' ? "Tie!" : winner === 'X' ? "Win!" : "Lose!"}</h2>
                            <button onClick={reset} className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all">RETRY</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────────────────
   MEMORY GAME COMPONENT
   ────────────────────────────────────────────────────────── */

const MEMORY_ICONS = ["bolt", "rocket_launch", "database", "code", "terminal", "memory", "palette", "dns"];

function MemoryGame() {
    const [cards, setCards] = useState<{ id: number; icon: string; flipped: boolean; matched: boolean }[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);

    const initGame = useCallback(() => {
        const shuffled = [...MEMORY_ICONS, ...MEMORY_ICONS]
            .sort(() => Math.random() - 0.5)
            .map((icon, id) => ({ id, icon, flipped: false, matched: false }));
        setCards(shuffled);
        setFlipped([]);
        setMoves(0);
    }, []);

    useEffect(() => { initGame(); }, [initGame]);

    const handleFlip = (id: number) => {
        if (flipped.length === 2 || cards[id].flipped || cards[id].matched) return;
        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        const newCards = [...cards];
        newCards[id].flipped = true;
        setCards(newCards);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const [first, second] = newFlipped;
            if (cards[first].icon === cards[second].icon) {
                newCards[first].matched = true;
                newCards[second].matched = true;
                setCards(newCards);
                setFlipped([]);
            } else {
                setTimeout(() => {
                    newCards[first].flipped = false;
                    newCards[second].flipped = false;
                    setCards(newCards);
                    setFlipped([]);
                }, 1000);
            }
        }
    };

    const won = cards.length > 0 && cards.every(c => c.matched);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-8">
                <div className="text-center"><p className="text-xs font-mono opacity-40 uppercase">Moves</p><p className="text-2xl font-black text-primary">{moves}</p></div>
                <button onClick={initGame} className="px-6 py-2 bg-surface border border-border rounded-xl text-xs font-bold hover:border-primary transition-all">RESET</button>
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-4 relative">
                {cards.map((card) => (
                    <motion.button
                        key={card.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFlip(card.id)}
                        className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 transform-gpu perspective-1000 ${card.flipped || card.matched ? 'bg-primary/20 border-primary rotate-y-180' : 'bg-surface border-border shadow-lg'}`}
                    >
                        {(card.flipped || card.matched) ? (
                            <span className="material-symbols-outlined text-3xl text-primary">{card.icon}</span>
                        ) : (
                            <div className="w-2 h-2 rounded-full bg-border" />
                        )}
                    </motion.button>
                ))}

                {won && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-[2rem] z-20">
                        <h2 className="text-3xl font-black mb-4 text-foreground">Memory Mastery!</h2>
                        <p className="text-foreground/40 mb-6">Cleared in {moves} moves.</p>
                        <button onClick={initGame} className="px-8 py-3 bg-primary text-white font-black rounded-xl shadow-lg hover:scale-110 transition-all">PLAY AGAIN</button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
