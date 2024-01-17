"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const dark = {
    black: "#FFFFFF",
    darkgrey: "#DDDDDD",
    lightgrey: "#AAAAAA",
    white: "#1C1B22",
    accent: "#8943E3",
};

const light = {
    black: "#000000",
    darkgrey: "#AAAAAA",
    lightgrey: "#DDDDDD",
    white: "#FFFFFF",
    accent: "#78BB1F",
};

const useColors = () => {
    const { resolvedTheme, theme, setTheme } = useTheme();

    const [colors, setColors] = useState(light);

    useEffect(() => {
        if (resolvedTheme === "dark") {
            setColors(dark);
        } else {
            setColors(light);
        }
    }, [resolvedTheme]);

    return colors;
};

export default useColors;
