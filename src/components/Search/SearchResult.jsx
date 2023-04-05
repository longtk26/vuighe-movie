import { useEffect, useRef, useContext } from "react";
import { animated } from "@react-spring/web";
import AnimeSearch from "../AnimeSearch/AnimeSearch";
import { NameAnimeContext } from "./SearchContext";
import SearchLoading from "./SearchLoading";

function SearchResult({ navbar, onHide, style, inFocus }) {
    const searchResultRef = useRef();
    const { searchResults, isLoading } = useContext(NameAnimeContext);

    const handleSearchResultDisplay = (e) => {
        if (!searchResultRef.current.contains(e.target)) {
            onHide(false);
        }

        if (inFocus.current.contains(e.target)) {
            onHide(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleSearchResultDisplay);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleSearchResultDisplay
            );
        };
    }, []);

    return (
        <animated.div
            className={`absolute right-[-6px] left-[-6px] top-[-8px] bg-white
                        pt-10 px-2 pb-4 min-h-[129px] z-[1] dark:bg-slate-800
                        ${
                            navbar
                                ? "lg:hidden min-h-[250px]"
                                : "max-h-[400px] shadow-search"
                        }
                        `}
            ref={searchResultRef}
            style={style}
        >
            <div
                className={`${
                    navbar
                        ? "w-full max-h-[100vh] mt-2"
                        : "w-[320px] max-h-[320px] mt-1"
                } scroll-bar-search dark:scroll-bar-dark`}
            >
                {!isLoading ? (
                    searchResults ? (
                        searchResults?.map((anime) => (
                            <AnimeSearch
                                key={anime.mal_id}
                                img={anime.images.jpg.image_url}
                                title={anime.title}
                                views={anime.favorites}
                            />
                        ))
                    ) : (
                        <p
                            className={`text-center mt-8 text-sm
                    ${navbar ? "mt-16" : ""}`}
                        >
                            Nhập tên anime để tìm kiếm
                        </p>
                    )
                ) : null}
                {!isLoading
                    ? searchResults?.length === 0 && (
                          <p
                              className={`text-center mt-8 text-sm
                    ${navbar ? "mt-16" : ""}`}
                          >
                              Không tìm thấy anime phù hợp
                          </p>
                      )
                    : null}
                {isLoading && <SearchLoading />}
            </div>
        </animated.div>
    );
}

export default SearchResult;
