import { Layout, formLayout } from "../Layout";
import { rankAnimeLoading } from "../UI/loading";
import { CardAnime, LoadingAnime } from "../components";
import { useTopAnime } from "../hooks";

function Ranking() {
    const [topAnimes, isLoading] = useTopAnime();
    const topAnimeList = topAnimes?.filter((item) => item.rank <= 9);

    return (
        <Layout title="bảng xếp hạng" className={formLayout.layout_2}>
            {isLoading
                ? rankAnimeLoading.map((item) => <LoadingAnime key={item} />)
                : topAnimeList?.map((item) => (
                      <CardAnime
                          className={formLayout.children_rank}
                          key={item.mal_id}
                          typeCard="rank"
                          data={item}
                          img={item.images.jpg.image_url}
                      />
                  ))}
        </Layout>
    );
}

export default Ranking;
