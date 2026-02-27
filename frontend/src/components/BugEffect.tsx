"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export function BugEffect() {
    const { theme } = useTheme();
    const [scatters, setScatters] = useState(false);
    const [bugs, setBugs] = useState<{ id: number; x: number; y: number; rotation: number }[]>([]);

    useEffect(() => {
        if (theme === "light") {
            setScatters(true);
            const timer = setTimeout(() => {
                setScatters(false);
                setBugs([]);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            // Generate some random bugs in dark mode
            const newBugs = Array.from({ length: 12 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotation: Math.random() * 360,
            }));
            setBugs(newBugs);
        }
    }, [theme]);

    if (theme === "light" && !scatters) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            <AnimatePresence>
                {bugs.map((bug) => (
                    <motion.div
                        key={bug.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: theme === 'dark' ? 0.4 : 0,
                            scale: theme === 'dark' ? 1 : 0.5,
                            x: scatters ? `${bug.x + (Math.random() - 0.5) * 50}vw` : `${bug.x}vw`,
                            y: scatters ? `${bug.y + (Math.random() - 0.5) * 50}vh` : `${bug.y}vh`,
                            rotate: scatters ? bug.rotation + 720 : bug.rotation
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            duration: scatters ? 0.8 : 2,
                            ease: scatters ? "easeOut" : "easeInOut",
                            repeat: theme === 'dark' ? Infinity : 0,
                            repeatType: "reverse"
                        }}
                        className="absolute text-primary"
                        style={{ left: 0, top: 0 }}
                    >
                        <span className="material-symbols-outlined text-[14px]">bug_report</span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
