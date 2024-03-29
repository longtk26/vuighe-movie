import { useEffect } from "react";
import { Layout, formLayout } from "../../Layout";
import { CardAnime, LoadingAnime } from "../../components";
import { useTopAnime } from "../../hooks";
import { rankingLoadingPage } from "../../UI/loading";
function Rank() {
    const [topAnimes, isLoading] = useTopAnime();
    const topAnimeList = topAnimes?.filter((item) => item.rank <= 24);

    useEffect(() => {
        document.title = "BXH Anime";
    }, []);

    return (
        <main className="lg:px-12 md:px-3 mt-20 px-2 relative -z-10">
            <Layout title="bxh hôm nay" className={formLayout.layout_1}>
                {isLoading
                    ? rankingLoadingPage.map((item) => (
                          <LoadingAnime key={item} />
                      ))
                    : topAnimeList?.map((item) => (
                          <CardAnime
                              className={formLayout.children_1}
                              key={item.mal_id}
                              rankingPage
                              typeCard={1}
                              data={item}
                              img={item.images.jpg.image_url}
                          />
                      ))}
            </Layout>
        </main>
    );
}

export default Rank;
