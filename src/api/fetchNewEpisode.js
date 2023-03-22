const fetchNewEpisode = async () => {
    const url = `https://api.jikan.moe/v4/seasons/2022/spring`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

export default fetchNewEpisode;
