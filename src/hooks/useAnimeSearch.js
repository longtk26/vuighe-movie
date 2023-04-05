import { useQuery } from "react-query";
import { fetchAnimeSearch } from "../api";

const useAnimeSearch = (nameAnime) => {
    const result = useQuery(["searchAnime", nameAnime], fetchAnimeSearch);

    return [result?.data?.data, result?.isLoading];
};

export default useAnimeSearch;
