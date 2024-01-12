import { PenTool, Code } from "react-feather";
import useStyles from "../hooks/styles";
import useColors from "../hooks/colors";
import React, { useState, useEffect } from "react";
import DevPortfolio from "./devportfolio";

const ChoiceStyles = (colors, flexRow) => {
    const position = {
        margin: "-3.2rem 0 0 0",
    };
    const container = {
        ...flexRow,
        width: "fit-content",
        height: "fit-content",
        padding: "3px",
        color: colors.darkgrey,
        fontSize: "16px",
        flexWrap: "nowrap",
        gap: "8px",
    };
    const optionBase = {
        ...flexRow,
        fontWeight: "500",
        cursor: "pointer",
        width: "fit-content",
        height: "fit-content",
        gap: "8px",
        padding: "8px 12px",
        flexWrap: "nowrap",
        borderTop: `1px solid ${colors.lightgrey}`,
    };
    const active = {
        ...optionBase,
        backgroundColor: colors.white,
        color: colors.black,
        borderTop: `1px solid ${colors.black}`,
    };
    const inactive = {
        ...flexRow,
        ...optionBase,
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
                    marginTop: "2rem",
                    marginLeft: "-10px",
                }}
            >
                {activeChoice === "design" ? <></> : <DevPortfolio />}
            </div>
        </>
    );
};

export default PortfolioIndex;
