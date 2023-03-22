import { Layout, formLayout } from "../Layout";
import { CardAnime } from "../components";
import { useNewEpisode } from "../hooks";

function NewEpisode() {
    const [newEpisodes] = useNewEpisode();
    const newEpisodeList = newEpisodes?.splice(0, 12);

    return (
        <Layout title="tập mới nhất" className={formLayout.layout_1}>
            {newEpisodeList?.map((item) => (
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
