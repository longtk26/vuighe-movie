import { Layout, formLayout } from "../Layout";
import { CardAnime } from "../components";
import { useAnimeToday } from "../hooks";

function WhatSee() {
    const [animeTodays] = useAnimeToday();
    const animeTodaysList = animeTodays?.splice(0, 6);

    return (
        <Layout title="hôm nay xem gì" className={formLayout.layout_3}>
            {animeTodaysList?.map((item) => (
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

export default WhatSee;
