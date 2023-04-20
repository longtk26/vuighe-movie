import { useEffect } from "react";

const useTheme = (theme) => {
    const htmlElment = document.documentElement;

    useEffect(() => {
        if (theme === "light") {
            htmlElment.classList.remove("dark");
        } else {
            htmlElment.classList.add("dark");
        }
    }, [theme]);
};

export default useTheme;
