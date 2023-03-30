import { createContext, useState } from "react";

const ThemeContext = createContext();

function Theme({ children }) {
    const [theme, setTheme] = useState("light");
    const value = [theme, setTheme];
    const htmlElment = document.documentElement;
    if (theme === "light") {
        htmlElment.classList.add(theme);
        htmlElment.classList.remove("dark");
    } else {
        htmlElment.classList.add(theme);
        htmlElment.classList.remove("light");
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default Theme;
export { ThemeContext };
