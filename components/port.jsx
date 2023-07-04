import React, { useState, useEffect } from "react";
import works from "../consts/works";
import colors from "../consts/colors";
import {
    Archive,
    Search,
    PenTool,
    Code,
    BookOpen,
    Layers,
    ArrowRight,
} from "react-feather";

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

const Work = ({ work, expanded, onClick }) => {
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
                        <span style={spanWithIcon}>
                            <Archive size={16} />
                            <span>{work.company}</span>
                        </span>
                        <span>{work.year}</span>
                    </div>
                    <div>
                        <span style={spanWithIcon}>
                            <Layers size={16} />
                            <span>{work.stack.join(", ")}</span>
                        </span>
                    </div>
                    <div>
                        <span style={spanWithIcon}>
                            <BookOpen size={16} />
                            <span>{work.license}</span>
                        </span>
                    </div>
                    <div
                        style={{
                            ...flexRow,
                            justifyContent: "flex-end",
                        }}
                    >
                        {work.link && (
                            <a
                                style={linkButton}
                                href={work.link}
                                target='_blank'
                            >
                                Visit Project <ArrowRight size={18} />
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
            visibility: "hidden",
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
            <span
                style={{
                    ...spanWithIcon,
                    gap: "12px",
                }}
            >
                <Search size={20} />
                <input
                    type='text'
                    placeholder='Search'
                    value={filter.search}
                    onChange={handleSearchChange}
                />
            </span>
            <div
                style={{
                    ...flexRow,
                    justifyContent: "flex-end",
                }}
            >
                <span style={flexRow}>
                    <input
                        id='design-check'
                        type='checkbox'
                        value='design'
                        style={style.checkbox}
                        checked={filter.tags.includes("design")}
                        onChange={handleTagChange}
                    />
                    <label
                        for='design-check'
                        style={
                            filter.tags.includes("design")
                                ? style.labelActive
                                : style.labelInactive
                        }
                    >
                        <span style={spanWithIcon}>
                            <span>Design</span>
                            <PenTool size={16} />
                        </span>
                    </label>
                </span>
                <span style={flexRow}>
                    <input
                        id='code-check'
                        type='checkbox'
                        value='code'
                        style={style.checkbox}
                        checked={filter.tags.includes("code")}
                        onChange={handleTagChange}
                    />
                    <label
                        for='code-check'
                        style={
                            filter.tags.includes("code")
                                ? style.labelActive
                                : style.labelInactive
                        }
                    >
                        <span style={spanWithIcon}>
                            <span>Code</span>
                            <Code size={16} />
                        </span>
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
