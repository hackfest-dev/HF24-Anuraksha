/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                "font-color": "var(--color-font)",
                "background-color": "var(--color-background)",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"], // Adds Poppins to the 'sans' font family
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
