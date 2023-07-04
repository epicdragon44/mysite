import React from "react";
import { Moon, Sun } from "react-feather";
import { useTheme } from "nextra-theme-blog";
import useColors from "../hooks/colors";

const DarkModeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    const colors = useColors();

    const switchTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "50px",
        height: "30px",
        borderRadius: "15px",
        border: `2px solid ${colors.black}`,
        backgroundColor: "transparent",
    };

    const iconStyle = {
        display: "flex",
        justifyContent: isDark ? "flex-end" : "flex-start",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        padding: "5px",
        transition: "0.5s",
    };

    const Icon = isDark ? Sun : Moon;

    return (
        <div style={containerStyle} onClick={switchTheme}>
            <div style={iconStyle}>
                <Icon color={colors.black} size={16} />
            </div>
        </div>
    );
};

export default DarkModeSwitcher;
