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
};
const container = {
    margin: "6px",
    padding: "6px",
    cursor: "pointer",
    fontSize: "15px",
};
const linkButton = {
    ...spanWithIcon,
    color: colors.textSecondary,
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
    color: colors.textSecondary,
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
        padding: "8px 16px",
        borderRadius: "64px",
        fontSize: "16px",
        color: colors.textSecondary,
    },
    labelActive: {
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: "64px",
        fontSize: "16px",
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

    spanWithIcon,
    flexRow,
    container,
    linkButton,
    expandRow,
    expandedDiv,

    filterBarStyle,
};

export default styles;
