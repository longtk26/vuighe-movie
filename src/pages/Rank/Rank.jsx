import { Layout, formLayout } from "../../Layout";
import { CardAnime } from "../../components";
import { useTopAnime } from "../../hooks";
function Rank() {
    const [topAnimes] = useTopAnime();
    const topAnimeList = topAnimes?.filter((item) => item.rank <= 24);

    return (
        <main className="lg:px-12 md:px-3 mt-20 px-2 relative -z-10">
            <Layout title="bxh hôm nay" className={formLayout.layout_1}>
                {topAnimeList?.map((item) => (
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
