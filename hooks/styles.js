import useColors from "./colors";
import useBreakpoint from "../hooks/breakpoint";
import { useTheme } from "next-themes";

const useStyles = () => {
    const { resolvedTheme, theme, setTheme } = useTheme();

    const colors = useColors();

    const { breakpoint, windowSize } = useBreakpoint();

    const bar = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0 16px 0",
        position: "fixed",
        // left: "0",
        // right: "0",
        zIndex: "20",
        width: windowSize.width <= 800 ? "fit-content" : "650px",
        gap: "2rem",
        backgroundColor: colors.white,
    };

    const navStyle = {
        ...bar,
        top: "0",
        borderBottom: "1px solid " + colors.lightgrey,
    };

    const footStyle = {
        ...bar,
        bottom: "0",
        borderTop: "1px solid " + colors.lightgrey,
        paddingRight: "4rem",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
    };

    const linkStyle = {
        color: colors.lightgrey,
        marginRight: "1px",
        textDecoration: "none",
        fontWeight: "400",
        color: colors.accent,
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: colors.black,
    };

    const navLinkStyle = (active) => ({
        ...linkStyle,
        color: colors.darkgrey,
        fontWeight: "400",
        ...(active
            ? {
                  ...activeLinkStyle,
                  color: colors.black,
                  fontWeight: "500",
              }
            : {}),
    });

    const resourceLinkStyle = {
        ...linkStyle,
        color: colors.black,
        marginRight: "0",
        fontWeight: "400",
    };

    const spanWithIcon = {
        display: "flex",
        flexDirection: "row",
        width: "fit-content",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
    };
    const flexRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
    };
    const imageWrapper = {
        ...flexRow,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    };
    const container = {
        margin: "6px",
        padding: "6px",
        cursor: "pointer",
        fontSize: "15px",
    };
    const linkButton = {
        ...spanWithIcon,
        color: colors.black,
        textDecoration: "none",
        marginRight: "0",
        fontWeight: "500",
    };
    const expandRow = {
        ...flexRow,
        padding: "6px",
        borderTop: "1px solid " + colors.lightgrey,
    };
    const expandedDiv = {
        padding: "8px",
        color: colors.darkgrey,
        fontWeight: "300",
    };

    const filterBarStyle = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
        },
        checkbox: {
            margin: "0 8px",
            display: "none",
        },
        labelInactive: {
            cursor: "pointer",
            padding: "4px 16px",
            borderRadius: "64px",
            fontSize: "12px",
            color: resolvedTheme === "dark" ? colors.white : colors.black,
            backgroundColor: colors.lightgrey,
        },
        labelActive: {
            cursor: "pointer",
            padding: "4px 16px",
            borderRadius: "64px",
            fontSize: "12px",
            color: colors.white,
            backgroundColor: colors.black,
        },
    };

    const styles = {
        navStyle,
        containerStyle,
        linkStyle,
        activeLinkStyle,
        footStyle,
        navLinkStyle,
        resourceLinkStyle,

        spanWithIcon,
        flexRow,
        imageWrapper,
        container,
        linkButton,
        expandRow,
        expandedDiv,

        filterBarStyle,
    };

    return styles;
};

export default useStyles;
