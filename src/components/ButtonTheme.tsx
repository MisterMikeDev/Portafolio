import { useState, useEffect } from "react";

export default function ButtonTheme() {
    const getThemeFromLocalStorage = () => {
        const storedTheme = localStorage.getItem("theme");
        return (
            storedTheme ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light")
        );
    };

    const [theme, setTheme] = useState(getThemeFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <button onClick={handleClick} role="button">
            {theme === "light" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-sun-filled"
                    viewBox="0 0 24 24"
                >
                    <>
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                            fill="currentColor"
                            stroke="none"
                            d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1zM18.313 16.91l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 1.218-1.567l.102.07zM7.007 16.993a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11h1zM21 11a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11h1zM6.213 4.81l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7A1 1 0 0 1 6.11 4.74l.102.07zM19.107 4.893a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1zM12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z"
                        />
                    </>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-moon-filled"
                    viewBox="0 0 24 24"
                >
                    <>
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                            fill="currentColor"
                            stroke="none"
                            d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006-.06-.002z"
                        />
                    </>
                </svg>
            )}
        </button>
    );
}
