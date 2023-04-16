import { useEffect } from "react";

const useTheme = (theme) => {
    const htmlElment = document.documentElement;

    useEffect(() => {
        if (theme === "light") {
            localStorage.theme = "light";
        } else if (theme === "dark") {
            localStorage.theme = "dark";
        } else {
            localStorage.removeItem("theme");
        }

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            htmlElment.classList.add("dark");
        } else {
            htmlElment.classList.remove("dark");
        }
    }, [theme]);
};

export default useTheme;
