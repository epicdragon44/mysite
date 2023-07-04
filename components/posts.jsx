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
                            margin: "0 0 4rem 0",
                            borderLeft: `2px solid ${colors.textPrimary}`,
                            paddingLeft: "2rem",
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
                                        color: colors.textPrimary,
                                    }}
                                >
                                    {post.name}
                                </span>
                                ,{" "}
                                <span
                                    style={{
                                        fontWeight: "300",
                                        color: colors.textSecondary,
                                    }}
                                >
                                    {post.year}
                                </span>
                            </span>
                            <ArrowRight />
                        </h3>
                        <p
                            style={{
                                fontWeight: "300",
                                color: colors.textSecondary,
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
