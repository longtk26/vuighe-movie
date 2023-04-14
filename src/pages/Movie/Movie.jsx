import { useEffect } from "react";
import { Layout, formLayout } from "../../Layout";
import { CardAnime, LoadingAnime } from "../../components";
import { useAnimeMovie } from "../../hooks";
import { movieLoadingPage } from "../../UI/loading";

function Movie() {
    const [animeMovies, isLoading] = useAnimeMovie();
    const animeMovieList = animeMovies?.filter((item) => item.mal_id !== 49387);

    useEffect(() => {
        document.title = "Anime Movie";
    }, []);

    return (
        <main className="lg:px-12 md:px-3 mt-20 px-2 relative -z-10">
            <Layout className={formLayout.layout_movie}>
                {isLoading
                    ? movieLoadingPage.map((item) => (
                          <LoadingAnime key={item} />
                      ))
                    : animeMovieList?.map((item) => (
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
