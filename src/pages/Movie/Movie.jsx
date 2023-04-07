import { Layout, formLayout } from "../../Layout";
import { CardAnime } from "../../components";
import { useAnimeMovie } from "../../hooks";

function Movie() {
    const [animeMovies] = useAnimeMovie();
    const animeMovieList = animeMovies?.filter((item) => item.mal_id !== 49387);

    return (
        <main className="lg:px-12 md:px-3 mt-20 px-2 relative -z-10">
            <Layout className={formLayout.layout_movie}>
                {animeMovieList?.map((item) => (
                    <CardAnime
                        key={item.mal_id}
                        className={formLayout.children_movie}
                        typeCard={3}
                        data={item}
                        img={item.images.jpg.image_url}
                    />
                ))}
            </Layout>
        </main>
    );
}

export default Movie;
