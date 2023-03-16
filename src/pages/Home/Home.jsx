import { Slider, Banner, CardAnime } from "../../components";
import { Layout } from "../../Layout";
import { homeLayout } from "../../UI";

function Home() {
    return (
        <main className="lg:px-12 md:px-3 relative -z-10 px-2 md:w-[800px] md:m-auto lg:w-full lg:m-0">
            <div className="mt-20 mb-6 md:h-[165px] lg:h-[300px] flex items-center md:gap-x-2 md:flex-row flex-col gap-y-2">
                <Slider />
                <Banner />
            </div>
            {homeLayout.map((layout) => (
                <Layout
                    key={layout.title}
                    title={layout.title}
                    className={layout.typeLayout}
                >
                    {layout.datas.map((data) => (
                        <CardAnime
                            key={data}
                            className={layout.typeChildren}
                            img={layout.img}
                            typeCard={layout.typeCard}
                            data={data}
                        />
                    ))}
                </Layout>
            ))}
        </main>
    );
}

export default Home;
