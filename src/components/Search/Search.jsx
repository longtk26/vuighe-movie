import { FaSearch } from "react-icons/fa";
import AnimeSearch from "../AnimeSearch/AnimeSearch";

function Search({ navbar }) {
    const fakeAnimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div
            className={`relative lg:w-[320px] lg:block
        ${navbar ? "" : "hidden"}`}
        >
            <div
                className={`relative z-10
                        ${!navbar && "xl:rounded-[20px]"} pl-2.5 pr-8 xl:mr-6
                        border-[#ddd] border-[1px] w-full border-soopacity-0lid
                        ${!navbar && "hidden"} ${navbar && "lg:hidden"} lg:flex
                        search-parent transition-colors duration-300`}
            >
                <input
                    type="text"
                    className={`text-[#999] w-full border-none grow outline-none 
                            ${
                                navbar
                                    ? "text-[13px] py-0.5"
                                    : "text-[13px] px-2 py-1"
                            } caret-[#999] input-search`}
                    placeholder="Tiềm kiếm anime"
                />
                <FaSearch
                    className="absolute text-[#999] right-2 top-[50%] 
                            translate-y-[-50%] hover:text-black cursor-pointer"
                />
            </div>

            <div
                className={`absolute right-[-6px] left-[-6px] top-[-8px] bg-white
                pt-10 px-2 min-h-[129px] opacity-0
                ${navbar ? "lg:hidden" : "max-h-[400px] shadow-search"}
                anime-search transition-opacity duration-300`}
            >
                <div
                    className={`${
                        navbar
                            ? "w-full max-h-[100vh] mt-2"
                            : "w-[320px] max-h-[320px] mt-1"
                    } overflow-y-auto`}
                >
                    {fakeAnimes ? (
                        fakeAnimes.map((anime, index) => (
                            <AnimeSearch
                                key={index}
                                img="https://s199.imacdn.com/vg/2015/05/dragon-ball-large-1432284978.jpg"
                                title="Toriko 3d Kaimaku! Gourmet Adventure!"
                                views="2528286"
                            />
                        ))
                    ) : (
                        <p className="text-center mt-8 text-sm">
                            Nhập tên anime để tìm kiếm
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
