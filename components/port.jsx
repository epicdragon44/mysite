import React, { useState, useEffect } from "react";
import works from "../consts/works";
import colors from "../consts/colors";
import FancyCheckbox from "./check";

const Work = ({ work, expanded, onClick }) => {
    const container = {
        margin: "6px",
        padding: "6px",
        cursor: "pointer",
        fontSize: "15px",
    };
    const linkButton = {
        color: colors.textSecondary,
        textDecoration: "none",
        marginRight: "0",
        fontWeight: "600",
    };
    const flexRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
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

    return (
        <div style={container} onClick={onClick}>
            <div style={expandRow}>
                <span
                    style={{
                        fontWeight: "500",
                        color: colors.textPrimary,
                    }}
                >
                    {work.name}
                </span>
                <span
                    style={{
                        fontWeight: "300",
                        color: colors.textSecondary,
                    }}
                >
                    {work.descr}
                </span>
            </div>

            {expanded && (
                <div style={expandedDiv}>
                    <div style={flexRow}>
                        <span>{work.company}</span>
                        <span>{work.year}</span>
                    </div>
                    <div>Stack: {work.stack.join(", ")}</div>
                    <div style={flexRow}>
                        <span
                            style={{
                                fontFamily: "monospace",
                                fontSize: "14px",
                                fontWeight: "100",
                            }}
                        >
                            License: {work.license}
                        </span>
                        {work.link && (
                            <a
                                style={linkButton}
                                href={work.link}
                                target='_blank'
                            >
                                Visit Project
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const WorkList = ({ works, filter }) => {
    const [expanded, setExpanded] = useState(Array(works.length).fill(false));

    const handleClick = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const filteredWorks = works
        .filter((work) => {
            if (filter.search) {
                return (
                    work.name
                        .toLowerCase()
                        .includes(filter.search.toLowerCase()) ||
                    work.descr
                        .toLowerCase()
                        .includes(filter.search.toLowerCase())
                );
            }
            return true;
        })
        .filter((work) => {
            if (filter.tags.length) {
                return work.tags.some((tag) => filter.tags.includes(tag));
            }
            return true;
        });

    return (
        <div>
            {filteredWorks.map((work, index) => (
                <Work
                    key={index}
                    work={work}
                    expanded={expanded[index]}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

const FilterBar = ({ filter, setFilter }) => {
    const style = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
        },
        checkbox: {
            margin: "0 8px",
        },
        labelInactive: {
            fontSize: "16px",
            color: colors.textSecondary,
        },
        labelActive: {
            fontSize: "16px",
            color: colors.textPrimary,
        },
    };

    const handleSearchChange = (event) => {
        setFilter({ ...filter, search: event.target.value });
    };

    const handleTagChange = (event) => {
        const tags = filter.tags.includes(event.target.value)
            ? filter.tags.filter((tag) => tag !== event.target.value)
            : [...filter.tags, event.target.value];
        setFilter({ ...filter, tags });
    };

    return (
        <div style={style.container}>
            <input
                type='text'
                placeholder='Search'
                value={filter.search}
                onChange={handleSearchChange}
            />
            <div>
                <span style={{ marginRight: "12px" }}>
                    <input
                        type='checkbox'
                        value='design'
                        style={style.checkbox}
                        checked={filter.tags.includes("design")}
                        onChange={handleTagChange}
                    />
                    <label
                        style={
                            filter.tags.includes("design")
                                ? style.labelActive
                                : style.labelInactive
                        }
                    >
                        Design
                    </label>
                </span>
                <span style={{ marginRight: "0px" }}>
                    <input
                        type='checkbox'
                        value='code'
                        style={style.checkbox}
                        checked={filter.tags.includes("code")}
                        onChange={handleTagChange}
                    />
                    <label
                        style={
                            filter.tags.includes("code")
                                ? style.labelActive
                                : style.labelInactive
                        }
                    >
                        Code
                    </label>
                </span>
            </div>
        </div>
    );
};

const PortfolioIndex = () => {
    const [filter, setFilter] = useState({
        search: "",
        tags: [],
    });

    // Sort works by year, descending
    const sortedWorks = [...works].sort((a, b) => b.year - a.year);

    return (
        <div>
            <FilterBar filter={filter} setFilter={setFilter} />
            <WorkList works={sortedWorks} filter={filter} />
        </div>
    );
};

export default PortfolioIndex;
