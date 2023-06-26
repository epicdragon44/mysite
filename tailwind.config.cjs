/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            cursor: {
                semi: "url(/clickon.png), default",
                solid: "url(/clickoff.png), pointer",
                next: "url(/next.png), pointer",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
