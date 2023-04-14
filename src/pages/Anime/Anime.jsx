import { useEffect } from "react";
import { Layout, formLayout } from "../../Layout";
import { CardAnime, LoadingAnime } from "../../components";
import { useAllAnime } from "../../hooks";
import { animeLoadingPage } from "../../UI/loading";

function Anime() {
    const [allAnime, isLoading] = useAllAnime();
    const allAnimeList = allAnime?.filter((item, index) => index < 24);

    useEffect(() => {
        document.title = "Danh sách anime";
    }, []);

    return (
        <main className="lg:px-12 md:px-3 mt-20 px-2 relative -z-10">
            <Layout title="tất cả anime" className={formLayout.layout_1}>
                {isLoading
                    ? animeLoadingPage.map((item) => (
                          <LoadingAnime key={item} />
                      ))
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
        </main>
    );
}

export default Anime;
