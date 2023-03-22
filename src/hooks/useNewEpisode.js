import { useQuery } from "react-query";
import { fetchNewEpisode } from "../api";
const useNewEpisode = () => {
    const result = useQuery("newEpisode", fetchNewEpisode);

    return [result?.data?.data, result?.isLoading];
};

export default useNewEpisode;
