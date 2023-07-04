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

    const {
        spanWithIcon,
        flexRow,
        container,
        linkButton,
        expandRow,
        expandedDiv,
        filterBarStyle,
    } = useStyles();

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
                        .includes(filter.search.toLowerCase()) ||
                    work.stack.some((tag) =>
                        tag.toLowerCase().includes(filter.search.toLowerCase())
                    )
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

    const handleTagChange = (event) => {
        const tags = filter.tags.includes(event.target.value)
            ? filter.tags.filter((tag) => tag !== event.target.value)
            : [...filter.tags, event.target.value];
        setFilter({ ...filter, tags });
    };

    return (
        <div style={filterBarStyle.container}>
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
                    style={{
                        backgroundColor: "transparent",
                    }}
                />
            </span>
            <div
                style={{
                    ...flexRow,
                    gap: "12px",
                }}
            >
                <span style={flexRow}>
                    <input
                        id='design-check'
                        type='checkbox'
                        value='design'
                        style={filterBarStyle.checkbox}
                        checked={filter.tags.includes("design")}
                        onChange={handleTagChange}
                    />
                    <label
                        for='design-check'
                        style={
                            filter.tags.includes("design")
                                ? filterBarStyle.labelActive
                                : filterBarStyle.labelInactive
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
                        style={filterBarStyle.checkbox}
                        checked={filter.tags.includes("code")}
                        onChange={handleTagChange}
                    />
                    <label
                        for='code-check'
                        style={
                            filter.tags.includes("code")
                                ? filterBarStyle.labelActive
                                : filterBarStyle.labelInactive
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
