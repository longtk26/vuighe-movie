const fetchAnimeMovie = async () => {
    const url = `https://api.jikan.moe/v4/seasons/2023/winter`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

export default fetchAnimeMovie;
