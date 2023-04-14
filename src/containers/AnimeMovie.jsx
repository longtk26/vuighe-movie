import { Layout, formLayout } from "../Layout";
import { animeMovieLoading } from "../UI/loading";
import { CardAnime, LoadingAnime } from "../components";
import { useAnimeMovie } from "../hooks";

function AnimeMovie() {
    const [animeMovies, isLoading] = useAnimeMovie();
    const animeMovieList = animeMovies?.filter((item, index) => index <= 5);

    return (
        <Layout title="anime movie" className={formLayout.layout_3}>
            {isLoading
                ? animeMovieLoading.map((item) => <LoadingAnime key={item} />)
                : animeMovieList?.map((item) => (
                      <CardAnime
                          key={item.mal_id}
                          className={formLayout.children_3}
                          typeCard={3}
                          data={item}
                          img={item.images.jpg.image_url}
                      />
                  ))}
        </Layout>
    );
}

export default AnimeMovie;
