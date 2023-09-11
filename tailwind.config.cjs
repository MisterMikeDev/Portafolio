/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.astro"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-light": "#e1dbea",
                "secondary-light": "#d8d1df",
                "terciary-light": "#f8eeff",
                "primary-dark": "#060918",
                "secondary-dark": "#0a0f29",
                "terciary-dark": "#1a2659"
            },
            textColor: {
                "primary-light": "#080808",
                "primary-dark": "#ffffff"
            },
            fontFamily: {
                inter: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Open Sans",
                    "Helvetica Neue",
                    "sans-serif"
                ]
            }
        }
    },
    plugins: []
};
