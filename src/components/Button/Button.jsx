import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../GlobalState/Theme";

function Button({ path, Icon, circle, user, hover, children }) {
    const [, setTheme] = useContext(ThemeContext);
    let Tag = circle ? "div" : Link;

    const classDefault = `border-[1px] border-solid border-gray-300/100 dark:border-gray-700 
        xl:rounded-2xl py-1 px-2 xl:px-4 text-sm dark:hover:text-teal-500`;

    const classCircle = `rounded-[50%] dark:bg-slate-700 p-2 bg-[#eee] w-10 h-10 flex justify-center items-center text-1xl
        ${user ? "bg-[rgba(0,0,0,.25)] text-white" : ""} cursor-pointer
        ${
            hover
                ? "hover:bg-[#5b7dff] hover:text-white transition-colors ease-in delay-[50]"
                : ""
        }
        `;

    //Pass circle to define only iconSun that can be clicked
    const handleTheme = (circle) => {
        if (circle) {
            setTheme((preTheme) => {
                if (preTheme === "light") {
                    return "dark";
                } else {
                    return "light";
                }
            });
        }
    };
    return (
        <Tag
            to={path}
            className={circle ? classCircle : classDefault}
            onClick={() => handleTheme(circle)}
        >
            {children || (
                <Icon
                    className={`${
                        !hover && !user ? "text-[24px]" : "text-[16px]"
                    }`}
                />
            )}
        </Tag>
    );
}

export default Button;
