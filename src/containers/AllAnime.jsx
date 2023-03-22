import { Layout, formLayout } from "../Layout";
import { CardAnime } from "../components";
import { useAllAnime } from "../hooks";

function AllAnime() {
    const [allAnime] = useAllAnime();
    const allAnimeList = allAnime?.splice(0, 12);

    return (
        <Layout title="tất cả anime" className={formLayout.layout_1}>
            {allAnimeList?.map((item) => (
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
