import { FaSearch } from "react-icons/fa";

function Search({ navbar }) {
    return (
        <div
            className={`relative
            ${!navbar && "rounded-[20px]"} pl-2.5 pr-8 xl:mr-6
            border-[#ddd] border-[1px] xl:w-[320px] min-w-[250px] border-solid
            ${!navbar && "hidden"} ${navbar && "lg:hidden"} lg:flex`}
        >
            <input
                type="text"
                className={`text-[#999] w-full border-none grow outline-none 
                ${
                    navbar ? "text-[13px] py-0.5" : "text-sm px-2 py-1"
                } caret-[#999]`}
                placeholder="Tiềm kiếm anime"
            />
            <FaSearch
                className="absolute text-[#999] right-2 top-[50%] 
                translate-y-[-50%] hover:text-black cursor-pointer"
            />
        </div>
    );
}

export default Search;
