import { useState, useEffect } from "react";

const useHover = (ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const onHoverIn = () => setIsHovered(true);
    const onHoverOut = () => setIsHovered(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener("mouseenter", onHoverIn);
            node.addEventListener("mouseleave", onHoverOut);

            // Cleanup function
            return () => {
                node.removeEventListener("mouseenter", onHoverIn);
                node.removeEventListener("mouseleave", onHoverOut);
            };
        }
    }, [ref]); // Re-run if ref changes

    return isHovered;
};

export default useHover;
