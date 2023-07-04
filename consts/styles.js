import colors from "../consts/colors";

const bar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px",
    position: "absolute",
    left: "0",
    right: "0",
};

const navStyle = {
    ...bar,
    top: "0",
};

const footStyle = {
    ...bar,
    bottom: "0",
};

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
};

const linkStyle = {
    color: colors.textSecondary,
    marginRight: "1px",
    textDecoration: "none",
};

const activeLinkStyle = {
    ...linkStyle,
    color: colors.textPrimary,
    textUnderlineOffset: "2px",
    textDecorationThickness: "1px",
};

const styles = {
    navStyle,
    containerStyle,
    linkStyle,
    activeLinkStyle,
    footStyle,
};

export default styles;
