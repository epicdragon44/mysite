"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

/**
 * Renders a logo.
 * @param {*} props
 *   props.style : any -- object with inline styles
 * @returns
 */
const Schematic = (props) => {
    const { resolvedTheme, theme, setTheme } = useTheme();

    return (
        <img
            src={
                resolvedTheme === "dark"
                    ? `/assets/schematics/all-dark.png`
                    : `/assets/schematics/all.png`
            }
            alt='schematic'
        />
    );
};

export default Schematic;
