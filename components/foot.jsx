import useStyles from "../hooks/styles";
import CustomLink from "./link";
import { useTheme } from "nextra-theme-blog";
import Logo from "./logo";
import { useWindowSize } from "@uidotdev/usehooks";

/**
 * Renders a static footer.
 */
const footbar = () => {
    const { containerStyle, footStyle } = useStyles();

    const { theme } = useTheme();

    const { width, height } = useWindowSize();

    return (
        <nav style={footStyle}>
            <div style={containerStyle}>
                <CustomLink href='/resume' text='resume' newTab={true} />
                <CustomLink
                    href='https://www.linkedin.com/in/weidaniel15/'
                    text='linkedin'
                    newTab={true}
                />
                <CustomLink
                    href='https://github.com/epicdragon44'
                    text='github'
                    newTab={true}
                />
                <CustomLink
                    href='https://twitter.com/fromdanielwei15'
                    text='x?'
                    newTab={true}
                />
                <CustomLink
                    href='mailto:dlw266@cornell.edu'
                    text='email'
                    newTab={true}
                />
            </div>

            <div style={containerStyle}>
                <div
                    id='offset'
                    style={{
                        marginRight: "-18px",
                    }}
                >
                    <Logo
                        style={{
                            margin: "0",
                            padding: "0",
                            transform: "rotate(270deg) translate(32px)",
                            display: width < 600 ? "none" : "block",
                        }}
                    />
                </div>
            </div>
        </nav>
    );
};

export default footbar;
