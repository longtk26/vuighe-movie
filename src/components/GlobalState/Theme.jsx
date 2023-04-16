import { createContext, useState } from "react";
import { useTheme } from "../../hooks";

const ThemeContext = createContext();

function Theme({ children }) {
    const [theme, setTheme] = useState("system");
    const value = [theme, setTheme];

    //Just call to choose theme
    useTheme(theme);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default Theme;
export { ThemeContext };
