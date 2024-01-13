import React, { useState } from "react";
import works from "../cms/works";
import Link from "next/link";
import useColors from "../hooks/colors";
import { ArrowRight, ArrowLeft, ExternalLink } from "react-feather";

const DesignPortfolio = () => {
    const colors = useColors();

    // Sort all design-related works by year, descending in priority of rank.
    const sortedWorks = [...works]
        .filter((work) => work.tags.includes("design"))
        .sort((a, b) => a.rank - b.rank);

    const [currentSelected, setCurrentSelected] = useState(0); // Index of the currently selected work

    const work = sortedWorks[currentSelected];

    const incrementSelected = () =>
        setCurrentSelected((currentSelected + 1) % sortedWorks.length);

    const decrementSelected = () =>
        setCurrentSelected(
            (currentSelected - 1 + sortedWorks.length) % sortedWorks.length
        );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ArrowLeft
                            size={20}
                            onClick={decrementSelected}
                            style={{
                                cursor: "pointer",
                                color: colors.black,
                                margin: "0 0.5rem 0 0",
                            }}
                        />
                        <ArrowRight
                            size={20}
                            onClick={incrementSelected}
                            style={{
                                cursor: "pointer",
                                color: colors.black,
                                margin: "0 0 0 0.5rem",
                            }}
                        />
                    </div>
                    <Link
                        href={work.link}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "500",
                                color: colors.black,
                                letterSpacing: "0.1rem",
                                textTransform: "uppercase",
                                userSelect: "none",
                            }}
                        >
                            {work.name}
                        </span>
                        <ExternalLink
                            size={16}
                            style={{ margin: "0 0 0 0.5rem" }}
                        />
                    </Link>
                </div>
                <Link href={work.link}>
                    <img
                        src={work.cover[0]}
                        alt={work.name}
                        style={{
                            cursor: "pointer",
                            boxShadow:
                                "0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)",
                            margin: "0.5rem 0 0 0",
                            userSelect: "none",
                        }}
                    />
                </Link>
            </div>
        </div>
    );
};

export default DesignPortfolio;
