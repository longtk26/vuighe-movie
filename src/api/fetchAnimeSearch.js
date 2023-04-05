const fetchAnimeSearch = async ({ queryKey }) => {
    const nameAnime = queryKey[1];
    if (nameAnime !== "") {
        const url = `https://api.jikan.moe/v4/anime?q=${nameAnime}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }
    return [];
};

export default fetchAnimeSearch;
