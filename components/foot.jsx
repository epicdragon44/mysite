import useStyles from "../hooks/styles";
import { ResourceLink } from "./link";
import Logo from "./logo";
import { useWindowSize } from "@uidotdev/usehooks";
import useColors from "../hooks/colors";

/**
 * Renders a static footer.
 */
const footbar = () => {
    const { containerStyle, footStyle } = useStyles();

    const colors = useColors();

    return (
        <nav style={footStyle}>
            <div style={containerStyle}>
                <ResourceLink
                    href='/files/resume.pdf'
                    text='resume'
                    newTab={true}
                />
                <ResourceLink
                    href='https://www.linkedin.com/in/weidaniel15/'
                    text='linkedin'
                    newTab={true}
                />
                <ResourceLink
                    href='https://github.com/epicdragon44'
                    text='github'
                    newTab={true}
                />
                <ResourceLink
                    href='https://twitter.com/fromdanielwei15'
                    text='x'
                    newTab={true}
                />
                <ResourceLink
                    href='mailto:dlw266@cornell.edu'
                    text='email'
                    newTab={true}
                />
            </div>
        </nav>
    );
};

export default footbar;
