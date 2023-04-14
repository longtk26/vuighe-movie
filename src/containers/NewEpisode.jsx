import { Layout, formLayout } from "../Layout";
import { newEpisodeAnimeLoading } from "../UI/loading";
import { CardAnime, LoadingAnime } from "../components";
import { useNewEpisode } from "../hooks";

function NewEpisode() {
    const [newEpisodes, isLoading] = useNewEpisode();
    const newEpisodeList = newEpisodes?.filter((item, index) => index <= 11);

    return (
        <Layout title="tập mới nhất" className={formLayout.layout_1}>
            {isLoading
                ? newEpisodeAnimeLoading.map((item) => (
                      <LoadingAnime key={item} />
                  ))
                : newEpisodeList?.map((item) => (
                      <CardAnime
                          className={formLayout.children_1}
                          key={item.mal_id}
                          typeCard={1}
                          img={item.images.jpg.image_url}
                          data={item}
                      />
                  ))}
        </Layout>
    );
}

export default NewEpisode;
