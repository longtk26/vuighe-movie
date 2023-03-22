import { Layout, formLayout } from "../Layout";
import { CardAnime } from "../components";
import { useTopAnime } from "../hooks";

function Ranking() {
    const [topAnimes] = useTopAnime();
    const topAnimeList = topAnimes?.filter((item) => item.rank <= 9);

    return (
        <Layout title="bảng xếp hạng" className={formLayout.layout_2}>
            {topAnimeList?.map((item) => (
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
