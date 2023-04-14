import { Layout, formLayout } from "../Layout";
import { allAnimeLoading } from "../UI/loading";
import { CardAnime, LoadingAnime } from "../components";
import { useAllAnime } from "../hooks";

function AllAnime() {
    const [allAnime, isLoading] = useAllAnime();
    const allAnimeList = allAnime?.filter((item, index) => index <= 11);

    return (
        <Layout title="tất cả anime" className={formLayout.layout_1}>
            {isLoading
                ? allAnimeLoading.map((item) => <LoadingAnime key={item} />)
                : allAnimeList?.map((item) => (
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

export default AllAnime;
