/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                lightBgFrom: "var(--light-bg-from)",
                lightBgTo: "var(--light-bg-to)",
                darkBgFrom: "var(--dark-bg-from)",
                darkBgTo: "var(--dark-bg-to)",
            },
            fontFamily: {
                logo: ["Zeyada"],
                heading: ["'Sour Gummy'", "serif"],
                body: ["serif", "sans-serif"],
                bnbody: ["'Noto Serif Bengali'", "serif"],
                bnheading: ["'Tiro Bangla'", "serif"],
            },
        },
    },

    plugins: [],
};
