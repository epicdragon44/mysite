import Image from "next/image";
import { useMemo } from "react";
import colors from "../consts/colors";
import styles from "../consts/styles";
import CustomLink from "./link";

/**
 * Renders a static footer.
 */
const footbar = () => {
    const { containerStyle, footStyle } = styles;

    return (
        <nav style={footStyle}>
            <div style={containerStyle}>
                <CustomLink
                    href='https://1drv.ms/b/s!AnDM_XYwI-BVgfwhtdqN9v86AyVlpQ?e=7kYyQ6'
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
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={72}
                        height={24}
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
