"use client";

import { useMemo } from "react";
import pathnames from "../consts/routes";
import useStyles from "../hooks/styles";
import CustomLink from "./link";
import { useTheme } from "nextra-theme-blog";
import Logo from "./logo";
import { useEffect, useState } from "react";
import DarkModeSwitcher from "./dark";

/**
 * Renders a static navigation bar.
 * @param {*} props.active : string
 *   The active page, identified by the path name.
 * @returns
 */
const navbar = (props) => {
    const { containerStyle, navStyle } = useStyles();

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (mounted) {
            setTheme("light");
        }
    }, [mounted]);

    const links = useMemo(
        () =>
            pathnames.map((path) => (
                <CustomLink
                    text={path.substring(1)}
                    href={path}
                    black={props.active === path}
                    key={path}
                />
            )),
        [props.active]
    );

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <a href='/'>
                    <Logo
                        style={{
                            margin: "0",
                            padding: "0",
                        }}
                    />
                </a>
            </div>

            <div style={containerStyle}>
                {links}
                {/* <DarkModeSwitcher /> */}
            </div>
        </nav>
    );
};

export default navbar;
