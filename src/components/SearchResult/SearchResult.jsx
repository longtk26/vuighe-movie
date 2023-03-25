import { useEffect, useRef } from "react";
import { animated } from "@react-spring/web";
import AnimeSearch from "../AnimeSearch/AnimeSearch";

function SearchResult({ navbar, onHide, style, inFocus }) {
    const fakeAnimes = [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
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
        document.addEventListener("mousedown", handleSearchResult);

        return () => {
            document.removeEventListener("mousedown", handleSearchResult);
        };
    }, []);

    return (
        <animated.div
            className={`absolute right-[-6px] left-[-6px] top-[-8px] bg-white
                        pt-10 px-2 pb-4 min-h-[129px] z-[1] dark:bg-slate-800/90
                        ${navbar ? "lg:hidden" : "max-h-[400px] shadow-search"}
                        `}
            ref={searchResultRef}
            style={style}
        >
            <div
                className={`${
                    navbar
                        ? "w-full max-h-[100vh] mt-2"
                        : "w-[320px] max-h-[320px] mt-1"
                } scroll-bar-search`}
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
                    <p className="text-center mt-8 text-sm">
                        Nhập tên anime để tìm kiếm
                    </p>
                )}
                {fakeAnimes.length === 0 && (
                    <p className="text-center mt-8 text-sm">
                        Không tìm thấy anime phù hợp
                    </p>
                )}
            </div>
        </animated.div>
    );
}

export default SearchResult;
