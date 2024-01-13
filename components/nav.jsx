"use client";

import { useMemo } from "react";
import pathnames from "../consts/routes";
import useStyles from "../hooks/styles";
import { NavLink } from "./link";
import Logo from "./logo";
import { useEffect, useState } from "react";

/**
 * Renders a static navigation bar.
 * @param {*} props.active : string
 *   The active page, identified by the path name.
 * @returns
 */
const navbar = (props) => {
    const { containerStyle, navStyle } = useStyles();

    const links = useMemo(
        () =>
            pathnames.map((path) => (
                <NavLink
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

            <div style={containerStyle}>{links}</div>
        </nav>
    );
};

export default navbar;
