import { useQuery } from "react-query";
import { fetchAnimeToday } from "../api";
const useAnimeToday = () => {
    const result = useQuery("animeToday", fetchAnimeToday);

    return [result?.data?.data, result?.isLoading];
};

export default useAnimeToday;
