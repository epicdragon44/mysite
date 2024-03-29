"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

/**
 * Renders a logo.
 * @param {*} props
 *   props.style : any -- object with inline styles
 * @returns
 */
const Logo = (props) => {
    const { resolvedTheme, theme, setTheme } = useTheme();

    return (
        <Image
            src={resolvedTheme === "dark" ? `/logo-dark.svg` : `/logo.svg`}
            alt='logo'
            width={72}
            height={24}
            style={props.style}
        />
    );
};

export default Logo;
