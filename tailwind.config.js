/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // Enable dark mode based on the 'dark' class
    theme: {
        extend: {
            // You can extend the theme with custom colors if needed
            colors: {
                // Example of custom colors (you can ignore this if you're using CSS variables)
                lightBgFrom: "var(--light-bg-from)",
                lightBgTo: "var(--light-bg-to)",
                darkBgFrom: "var(--dark-bg-from)",
                darkBgTo: "var(--dark-bg-to)",
            },
            fontFamily: {
                logo: ["Zeyada"],
                heading: ["Cursive"], // Heading font
                body: ["serif", "sans-serif"],
            },
        },
    },

    plugins: [],
};
