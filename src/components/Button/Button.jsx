import { Link } from "react-router-dom";

function Button({ path, Icon, circle, user, hover, children }) {
    let Tag = circle ? "div" : Link;

    const classDefault =
        "border-[1px] border-solid border-gray-300/100 rounded-2xl pt-0.5 pb-1 px-4 text-sm";

    const classCircle = `rounded-[50%] p-2 bg-[#eee] w-10 h-10 flex justify-center items-center text-1xl
        ${user ? "bg-[rgba(0,0,0,.25)] text-white" : ""} cursor-pointer
        ${
            hover
                ? "hover:bg-[#5b7dff] hover:text-white transition-colors ease-in delay-[50]"
                : ""
        }
        `;

    return (
        <Tag to={path} className={circle ? classCircle : classDefault}>
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
