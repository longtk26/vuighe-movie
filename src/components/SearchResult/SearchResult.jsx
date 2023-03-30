import { useEffect, useRef } from "react";
import { animated } from "@react-spring/web";
import AnimeSearch from "../AnimeSearch/AnimeSearch";

function SearchResult({ navbar, onHide, style, inFocus }) {
    const fakeAnimes = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    const searchResultRef = useRef();

    const handleSearchResult = (e) => {
        if (!searchResultRef.current.contains(e.target)) {
            onHide(false);
        }

        if (inFocus.current.contains(e.target)) {
            onHide(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleSearchResult, {
            passive: true,
        });

        return () => {
            document.removeEventListener("mousedown", handleSearchResult, {
                passive: true,
            });
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
                {fakeAnimes ? (
                    fakeAnimes.map((anime, index) => (
                        <AnimeSearch
                            key={index}
                            img="https://s199.imacdn.com/vg/2015/05/dragon-ball-large-1432284978.jpg"
                            title="Toriko 3d Kaimaku! Gourmet Adventure!"
                            views="2,528,286"
                        />
                    ))
                ) : (
                    <p
                        className={`text-center mt-8 text-sm
                    ${navbar ? "mt-16" : ""}`}
                    >
                        Nhập tên anime để tìm kiếm
                    </p>
                )}
                {fakeAnimes.length === 0 && (
                    <p
                        className={`text-center mt-8 text-sm
                    ${navbar ? "mt-16" : ""}`}
                    >
                        Không tìm thấy anime phù hợp
                    </p>
                )}
            </div>
        </animated.div>
    );
}

export default SearchResult;
