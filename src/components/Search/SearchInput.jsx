import { useState, useRef, useContext } from "react";
import { useTransition } from "@react-spring/web";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { NameAnimeContext } from "./SearchContext";

function SearchInput({ navbar }) {
    const [focus, setFocus] = useState(false);
    const { nameAnime, setNameAnime } = useContext(NameAnimeContext);
    const containInputRef = useRef();
    const transition = useTransition(focus, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <div
            className={`relative lg:w-[320px] lg:block group
        ${navbar ? "" : "hidden"}`}
        >
            <div
                className={`relative z-10
                        ${!navbar && "xl:rounded-[20px]"} pl-2.5 pr-8 xl:mr-6
                        border-[#ddd] border-[1px] w-full dark:border-gray-700
                        ${!navbar && "hidden"} ${navbar && "lg:hidden"} lg:flex
                        search-parent dark:search-parent-dark transition-colors duration-300`}
                ref={containInputRef}
            >
                <input
                    type="text"
                    className={`text-[#999] w-full border-none grow outline-none 
                            ${
                                navbar
                                    ? "text-[13px] py-0.5"
                                    : "text-[13px] px-2 py-1"
                            } caret-[#999] input-search dark:bg-slate-800 duration-300`}
                    placeholder="Tìm kiếm anime"
                    onFocus={() => setFocus(true)}
                    value={nameAnime}
                    onChange={(e) => setNameAnime(e.target.value)}
                />
                <FaSearch
                    className="absolute text-[#999] right-2 top-[50%] 
                            translate-y-[-50%] hover:text-black cursor-pointer
                            dark:hover:text-teal-500 dark:group-hover:text-teal-500"
                />
            </div>

            {transition((style, show) => {
                return (
                    show && (
                        <SearchResult
                            navbar={navbar}
                            onHide={setFocus}
                            style={style}
                            inFocus={containInputRef}
                        />
                    )
                );
            })}
        </div>
    );
}

export default SearchInput;
