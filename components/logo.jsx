"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

/**
 * Renders a logo.
 * @param {*} props
 *   props.style : any -- object with inline styles
 * @returns
 */
const Logo = (props) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted)
        return (
            <Image
                src={`/logo.svg`}
                alt='logo'
                width={72}
                height={24}
                style={props.style}
            />
        );

    return (
        <Image
            src={`/logo${theme === "light" ? "" : "-dark"}.svg`}
            alt='logo'
            width={72}
            height={24}
            style={props.style}
        />
    );
};

export default Logo;
