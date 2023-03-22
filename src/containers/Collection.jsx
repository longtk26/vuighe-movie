import { Layout, formLayout } from "../Layout";
import { CardAnime } from "../components";
import { collections } from "../UI";

function Collection() {
    return (
        <Layout title="bộ sưu tập" className={formLayout.layout_2}>
            {collections?.map((item) => (
                <CardAnime
                    key={item.id}
                    className={formLayout.children_2}
                    img={item.img}
                />
            ))}
        </Layout>
    );
}

export default Collection;
