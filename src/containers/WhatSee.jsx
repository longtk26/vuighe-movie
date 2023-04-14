import { Layout, formLayout } from "../Layout";
import { whatSeeLoading } from "../UI/loading";
import { CardAnime, LoadingAnime } from "../components";
import { useAnimeToday } from "../hooks";

function WhatSee() {
    const [animeTodays, isLoading] = useAnimeToday();
    const animeTodaysList = animeTodays?.filter((item, index) => index <= 5);

    return (
        <Layout title="hôm nay xem gì" className={formLayout.layout_3}>
            {isLoading
                ? whatSeeLoading.map((item) => <LoadingAnime key={item} />)
                : animeTodaysList?.map((item) => (
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
