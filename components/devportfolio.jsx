import React, { useState, useEffect } from "react";
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

const Work = ({ work, expanded, onClick }) => {
    const colors = useColors();

    const {
        spanWithIcon,
        flexRow,
        imageWrapper,
        container,
        linkButton,
        expandRow,
        expandedDiv,
        filterBarStyle,
    } = useStyles();

    return (
        <div style={container} onClick={onClick}>
            <div style={expandRow}>
                <span
                    style={{
                        fontWeight: "500",
                        color: colors.black,
                    }}
                >
                    {work.name}
                </span>
                <span
                    style={{
                        fontWeight: "300",
                        color: colors.darkgrey,
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
                    <div style={imageWrapper}>
                        {work.cover && (
                            <img
                                src={work.cover[0]}
                                style={{
                                    borderRadius: "12px",
                                    maxHeight: "480px",
                                    maxWidth: "600px",
                                    boxShadow: work.attachShadow
                                        ? "0px 10px 40px -16px rgba(0,0,0,0.6)"
                                        : "",
                                }}
                            />
                        )}
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
            if (filter.stack.length) {
                return work.stack.some((tech) => filter.stack.includes(tech));
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

const FilterBar = ({ stack, filter, setFilter }) => {
    const {
        spanWithIcon,
        flexRow,
        container,
        linkButton,
        expandRow,
        expandedDiv,
        filterBarStyle,
    } = useStyles();

    const handleSearchChange = (event) => {
        setFilter({ ...filter, search: event.target.value });
    };

    const handleStackChange = (tech) => {
        const stack = filter.stack.includes(tech)
            ? filter.stack.filter((ea) => ea !== tech)
            : [...filter.stack, tech];
        setFilter({ ...filter, stack });
    };

    return (
        <>
            <div style={filterBarStyle.container}>
                <span
                    style={{
                        ...spanWithIcon,
                        gap: "12px",
                        width: "100%",
                        marginLeft: "4px",
                    }}
                >
                    <Search size={20} />
                    <input
                        type='text'
                        placeholder='Search'
                        value={filter.search}
                        onChange={handleSearchChange}
                        style={{
                            backgroundColor: "transparent",
                            width: "100%",
                        }}
                    />
                </span>
            </div>
            <div
                className='no-scrollbar'
                style={{
                    ...flexRow,
                    gap: "4px",
                    margin: "0 12px 0 12px",
                    justifyContent: "flex-start",
                    maxWidth: "100%",
                    height: "30px",
                    overflowX: "scroll",
                    flexWrap: "nowrap",
                    scrollbarWidth: "none",
                }}
            >
                {stack.map((tech) => (
                    <label
                        key={tech}
                        onClick={() => handleStackChange(tech)}
                        for='design-check'
                        style={{
                            ...(filter.stack.includes(tech)
                                ? filterBarStyle.labelActive
                                : filterBarStyle.labelInactive),
                            width: "fit-content",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <span style={spanWithIcon}>
                            <span>{tech}</span>
                        </span>
                    </label>
                ))}
            </div>
        </>
    );
};

const DevPortfolio = () => {
    const [filter, setFilter] = useState({
        search: "",
        stack: [],
    });

    // Sort all code-related works by year, descending
    const sortedWorks = [...works]
        .filter((work) => work.tags.includes("code"))
        .sort((a, b) => b.year - a.year);

    const allStacks = [...sortedWorks].flatMap((work) => work.stack);

    return (
        <div>
            <FilterBar
                stack={allStacks}
                filter={filter}
                setFilter={setFilter}
            />
            <WorkList works={sortedWorks} filter={filter} />
        </div>
    );
};

export default DevPortfolio;
