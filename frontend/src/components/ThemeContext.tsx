"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Check system preference
            const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
            setTheme(systemTheme);
        }
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("theme", theme);
            if (theme === "light") {
                document.documentElement.classList.add("light");
                document.documentElement.classList.remove("dark");
                document.documentElement.style.colorScheme = "light";
            } else {
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
                document.documentElement.style.colorScheme = "dark";
            }
        }
    }, [theme, isMounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {/* Prevent flash of unstyled content by using a visibility class or similar if needed */}
            <div className={!isMounted ? "invisible" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
