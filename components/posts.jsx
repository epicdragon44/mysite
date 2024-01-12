import posts from "../cms/posts";
import useColors from "../hooks/colors";
import { ArrowRight } from "react-feather";

const Posts = () => {
    const colors = useColors();

    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            margin: "0 0 2rem 0",
                            borderLeft: `1px solid ${colors.lightgrey}`,
                            paddingLeft: "1.5rem",
                            cursor: "pointer",
                        }}
                        onClick={() =>
                            post.link.charAt(0) === "/"
                                ? window.open(post.link, "_self")
                                : window.open(post.link, "_blank")
                        }
                    >
                        <h3
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                            }}
                        >
                            <span>
                                <span
                                    style={{
                                        fontWeight: "500",
                                        color: colors.black,
                                    }}
                                >
                                    {post.name}
                                </span>{" "}
                                <span
                                    style={{
                                        fontWeight: "300",
                                        color: colors.darkgrey,
                                    }}
                                >
                                    {post.year}
                                </span>
                            </span>
                            <ArrowRight
                                style={{
                                    color: colors.lightgrey,
                                }}
                            />
                        </h3>
                        <p
                            style={{
                                fontWeight: "300",
                                color: colors.darkgrey,
                            }}
                        >
                            {post.descr}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
