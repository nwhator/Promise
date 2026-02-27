"use client";

import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-white/10 active:scale-90 group overflow-hidden"
            aria-label="Toggle theme"
        >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${theme === 'light' ? 'from-amber-100 to-yellow-500 opacity-20' : 'from-indigo-600 to-violet-900 opacity-20'} blur-lg scale-150 transition-opacity duration-500 group-hover:opacity-40 animate-pulse`} />

            <div className="relative z-10 flex items-center justify-center">
                {theme === "dark" ? (
                    <span className="material-symbols-outlined text-amber-400 text-[24px] transform transition-all duration-500 hover:rotate-45 hover:scale-110">
                        light_mode
                    </span>
                ) : (
                    <span className="material-symbols-outlined text-indigo-600 text-[24px] transform transition-all duration-500 hover:-rotate-12 hover:scale-110">
                        dark_mode
                    </span>
                )}
            </div>

            {/* Sparkles/Particles effect on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute top-1 left-3 w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-amber-200' : 'bg-indigo-300'} animate-ping`} />
                <div className={`absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-yellow-100' : 'bg-purple-200'} animate-pulse delay-75`} />
            </div>
        </button>
    );
}
