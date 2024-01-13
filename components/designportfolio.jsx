import React, { useState, useEffect, useRef } from "react";
import works from "../cms/works";
import useColors from "../hooks/colors";
import {
    Archive,
    Search,
    PenTool,
    Code,
    BookOpen,
    Layers,
    ArrowRight,
} from "react-feather";
import useStyles from "../hooks/styles";
import useHover from "../hooks/hover";
import Link from "next/link";

const DesignPortfolio = () => {
    // Sort all design-related works by year, descending
    const sortedWorks = [...works]
        .filter((work) => work.tags.includes("design"))
        .sort((a, b) => a.rank - b.rank);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
            }}
        >
            {sortedWorks.map((work, index) => (
                <Link href={work.link}>
                    <img
                        key={index}
                        src={work.cover[0]}
                        alt={work.name}
                        style={{
                            cursor: "pointer",
                            borderRadius: "8px",
                            boxShadow:
                                "0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                    />
                </Link>
            ))}
        </div>
    );
};

export default DesignPortfolio;
