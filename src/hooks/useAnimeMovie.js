import { useQuery } from "react-query";
import { fetchAnimeMovie } from "../api";
const useAnimeMovie = () => {
    const result = useQuery("animeMovie", fetchAnimeMovie);

    return [result?.data?.data, result?.isLoading];
};

export default useAnimeMovie;
