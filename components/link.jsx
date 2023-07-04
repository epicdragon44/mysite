import useStyles from "../hooks/styles";
import Link from "next/link";

/**
 * Custom Link Component
 * @param {*} props
 *  props.href : string -- link
 *  props.text : string -- text
 *  props.black? : boolean | undefined -- style
 *  key? : any -- used for aggregate iterated links
 *  newTab? : boolean | undefined -- open in new tab
 * @returns
 */
const CustomLink = (props) => {
    const { linkStyle, activeLinkStyle } = useStyles();

    const { href, text, black, key, newTab } = props;

    return (
        <Link
            href={href}
            style={black ? activeLinkStyle : linkStyle}
            key={key}
            target={newTab ? "_blank" : ""}
        >
            {text}
        </Link>
    );
};

export default CustomLink;
