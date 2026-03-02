"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogChrome } from '@/components/BlogChrome';

type Player = 'X' | 'O' | null;

export default function Game() {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState<Player | 'Draw'>(null);
    const [winningLine, setWinningLine] = useState<number[] | null>(null);
    const [gameMode, setGameMode] = useState<'PvP' | 'PvCPU'>('PvCPU');

    const calculateWinner = (squares: Player[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
            [0, 4, 8], [2, 4, 6]             // diags
        ];
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: [a, b, c] };
            }
        }
        if (squares.every(s => s !== null)) return { winner: 'Draw' as const, line: null };
        return null;
    };

    const handleClick = (i: number) => {
        if (board[i] || winner || (gameMode === 'PvCPU' && !isXNext)) return;
        const newBoard = [...board];
        newBoard[i] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    // AI Move logic
    useEffect(() => {
        if (gameMode === 'PvCPU' && !isXNext && !winner) {
            const timer = setTimeout(() => {
                const availableMoves = board.map((val, idx) => val === null ? idx : null).filter(val => val !== null) as number[];
                if (availableMoves.length > 0) {
                    // Simple AI: pick random
                    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
                    const newBoard = [...board];
                    newBoard[randomMove] = 'O';
                    setBoard(newBoard);
                    setIsXNext(true);
                }
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isXNext, board, winner, gameMode]);

    useEffect(() => {
        const result = calculateWinner(board);
        if (result) {
            setWinner(result.winner);
            setWinningLine(result.line);
        }
    }, [board]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setWinningLine(null);
    };

    return (
        <BlogChrome>
            <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-foreground">
                        {gameMode === 'PvCPU' ? 'Man vs ' : 'Tic Tac '}
                        <span className="text-gradient-primary">{gameMode === 'PvCPU' ? 'Machine' : 'Toe'}</span>
                    </h1>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={() => { setGameMode('PvCPU'); resetGame(); }}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${gameMode === 'PvCPU' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-surface border-border text-foreground/40'}`}
                        >
                            vs CPU
                        </button>
                        <button
                            onClick={() => { setGameMode('PvP'); resetGame(); }}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${gameMode === 'PvP' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-surface border-border text-foreground/40'}`}
                        >
                            2 PLAYERS
                        </button>
                    </div>
                </motion.div>

                <div className="relative">
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {board.map((square, i) => (
                            <motion.button
                                key={i}
                                whileHover={!winner && !board[i] ? { scale: 1.05, borderColor: 'var(--primary)' } : {}}
                                whileTap={!winner && !board[i] ? { scale: 0.95 } : {}}
                                onClick={() => handleClick(i)}
                                className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-2 flex items-center justify-center text-4xl md:text-5xl font-black transition-all duration-300 ${square === 'X' ? 'text-primary' : 'text-accent'
                                    } ${winningLine?.includes(i)
                                        ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(139,92,246,0.4)] z-10'
                                        : 'bg-surface border-border shadow-xl'
                                    } ${!square && !winner ? 'hover:bg-surface-brighter' : ''}`}
                            >
                                <AnimatePresence mode="wait">
                                    {square && (
                                        <motion.span
                                            initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            className="drop-shadow-2xl"
                                        >
                                            {square}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {winner && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-[3rem] z-20"
                            >
                                <h2 className="text-4xl font-black mb-6 text-foreground drop-shadow-lg">
                                    {winner === 'Draw' ? "It's a Tie!" : winner === 'X' ? "Victory!" : "Defeat!"}
                                </h2>
                                <button
                                    onClick={resetGame}
                                    className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-violet-600 transition-all shadow-xl shadow-primary/20 hover:scale-110 active:scale-95"
                                >
                                    REBOOT GAME
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {!winner && (
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mt-8 flex items-center gap-4 px-6 py-3 bg-surface border border-border rounded-2xl shadow-lg"
                    >
                        <span className="text-xs font-black text-foreground/30 uppercase tracking-[0.2em]">
                            {gameMode === 'PvCPU' && !isXNext ? 'CPU THINKING...' : 'YOUR TURN'}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl ${isXNext ? 'bg-primary/20 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-accent/20 text-accent'}`}>
                            {isXNext ? 'X' : 'O'}
                        </div>
                    </motion.div>
                )}
            </div>
        </BlogChrome>
    );
}
