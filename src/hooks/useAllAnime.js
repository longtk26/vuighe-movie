import { useQuery } from "react-query";
import { fetchAllAnime } from "../api";
const useAllAnime = () => {
    const result = useQuery("allAnime", fetchAllAnime);

    return [result?.data?.data, result?.isLoading];
};

export default useAllAnime;
