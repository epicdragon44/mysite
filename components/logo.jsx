"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Renders a logo.
 * @param {*} props
 *   props.style : any -- object with inline styles
 * @returns
 */
const Logo = (props) => (
    <Image
        src={`/logo.svg`}
        alt='logo'
        width={72}
        height={24}
        style={props.style}
    />
);

export default Logo;
