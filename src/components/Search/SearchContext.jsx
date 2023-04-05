import { createContext, useState } from "react";
import { useAnimeSearch, useDebounce } from "../../hooks";

export const NameAnimeContext = createContext();

function SearchContext({ children }) {
    const [nameAnime, setNameAnime] = useState("");
    const debounceNameAnime = useDebounce(nameAnime, 500);
    const [searchResults, isLoading] = useAnimeSearch(debounceNameAnime);

    return (
        <NameAnimeContext.Provider
            value={{ nameAnime, setNameAnime, searchResults, isLoading }}
        >
            {children}
        </NameAnimeContext.Provider>
    );
}

export default SearchContext;
