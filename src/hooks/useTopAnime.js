import { useQuery } from "react-query";
import { fetchTopAnime } from "../api";
const useTopAnime = () => {
    const result = useQuery("topAnime", fetchTopAnime);

    return [result?.data?.data, result?.isLoading];
};

export default useTopAnime;
