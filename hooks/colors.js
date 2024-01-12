"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useColors = () => ({
    black: "#000000",
    darkgrey: "#AAAAAA",
    lightgrey: "#DDDDDD",
    white: "#FFFFFF",
    accent: "#78BB1F",
});

export default useColors;
