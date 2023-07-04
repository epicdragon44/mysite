"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useColors = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const lightMode = {
        black: "#000000",
        darkgrey: "#7A7A7A",
        lightgrey: "#AAAAAA",
        white: "#FFFFFF",

        textPrimary: "#000000",
        textSecondary: "#606060",
    };

    const darkMode = {
        black: "#FFFFFF",
        darkgrey: "#AAAAAA",
        lightgrey: "#7A7A7A",
        white: "#000000",

        textPrimary: "#FFFFFF",
        textSecondary: "#F1F1F1",
    };

    if (!mounted) return lightMode;

    return theme === "light" ? lightMode : darkMode;
};

export default useColors;
