import Image from "next/image";
import { useMemo } from "react";
import pathnames from "../data/consts/routes";
import styles from "../data/styles/styles";
import CustomLink from "./link";

/**
 * Renders a static navigation bar.
 * @param {*} props.active : string
 *   The active page, identified by the path name.
 * @returns
 */
const navbar = (props) => {
    const { containerStyle, navStyle } = styles;

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
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={72}
                        height={24}
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
