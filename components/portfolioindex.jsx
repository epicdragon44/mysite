import { PenTool, Code } from "react-feather";
import useStyles from "../hooks/styles";
import useColors from "../hooks/colors";
import React, { useState, useEffect } from "react";
import DevPortfolio from "./devportfolio";
import DesignPortfolio from "./designportfolio";

const ChoiceStyles = (colors, flexRow) => {
    const position = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "end",
        margin: "2rem 0 0 0",
        padding: "0 0 0 0",
        width: "100%",
        borderBottom: `0.5px solid ${colors.lightgrey}`,
    };
    const container = {
        ...flexRow,
        width: "fit-content",
        height: "fit-content",
        padding: "0 0 0 0",
        color: colors.darkgrey,
        flexWrap: "nowrap",
        justifyContent: "center",
        gap: "8px",
    };
    const optionBase = {
        ...flexRow,
        cursor: "pointer",
        width: "fit-content",
        height: "fit-content",
        gap: "8px",
        padding: "8px 12px",
        flexWrap: "nowrap",
        borderBottom: `2px solid ${colors.white}`,
    };
    const active = {
        ...optionBase,
        fontWeight: "500",
        backgroundColor: colors.white,
        color: colors.black,
        borderBottom: `2px solid ${colors.black}`,
    };
    const inactive = {
        ...flexRow,
        ...optionBase,
        fontWeight: "300",
    };
    return { position, container, active, inactive };
};

const PortfolioIndex = (props) => {
    const colors = useColors();
    const { containerStyle, flexRow, spanWithIcon, linkButton } = useStyles();
    const choiceStyles = ChoiceStyles(colors, flexRow);

    const [activeChoice, setActiveChoice] = useState("design"); // design | code

    return (
        <>
            <div style={choiceStyles.position}>
                {/* <span style={{ margin: "none", padding: "none" }}>
                    Portfolio
                </span> */}
                <div style={choiceStyles.container}>
                    <button
                        key='design'
                        onClick={() => setActiveChoice("design")}
                        style={
                            activeChoice === "design"
                                ? choiceStyles.active
                                : choiceStyles.inactive
                        }
                    >
                        <PenTool size={16} />
                        Design
                    </button>
                    <button
                        key='code'
                        onClick={() => setActiveChoice("code")}
                        style={
                            activeChoice === "code"
                                ? choiceStyles.active
                                : choiceStyles.inactive
                        }
                    >
                        <Code size={16} />
                        Development
                    </button>
                </div>
            </div>
            <div
                id='content'
                style={{
                    marginLeft: "-10px",
                }}
            >
                {activeChoice === "design" ? (
                    <DesignPortfolio />
                ) : (
                    <DevPortfolio />
                )}
            </div>
        </>
    );
};

export default PortfolioIndex;
