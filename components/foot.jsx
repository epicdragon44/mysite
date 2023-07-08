import useStyles from "../hooks/styles";
import CustomLink from "./link";
import { useTheme } from "nextra-theme-blog";
import Logo from "./logo";

/**
 * Renders a static footer.
 */
const footbar = () => {
    const { containerStyle, footStyle } = useStyles();

    const { theme } = useTheme();

    return (
        <nav style={footStyle}>
            <div style={containerStyle}>
                <CustomLink
                    href='https://1drv.ms/b/s!AnDM_XYwI-BVgfwxW5z5THSrcTmhLQ?e=6YmDhI'
                    text='resume'
                    newTab={true}
                />
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
                        }}
                    />
                </div>
            </div>
        </nav>
    );
};

export default footbar;
