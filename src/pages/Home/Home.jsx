import { Slider, Banner } from "../../components";
import { Layout, formLayout } from "../../Layout";
function Home() {
    const fakesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const fakesData2 = [1, 2, 3, 4, 5, 6];
    const fakesData3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <main
            className="lg:px-12 md:px-3 relative -z-10 px-2 md:w-[800px] md:m-auto
        lg:w-full lg:m-0 h-[2000px]"
        >
            <div
                className="mt-20 md:h-[165px] lg:h-[300px] flex items-center md:gap-x-2
            md:flex-row flex-col gap-y-2"
            >
                <Slider />
                <Banner />
            </div>
            <Layout title="tập mới nhất" className={formLayout.layout_1}>
                {fakesData.map((data, index) => (
                    <div key={index} className="bg-red-400 aspect-video"></div>
                ))}
            </Layout>

            <Layout title="bộ sưu tập" className={formLayout.layout_2}>
                {fakesData3.map((data, index) => (
                    <div
                        key={index}
                        className={`bg-red-400 h-[95px] grow shrink-0 w-[200px] 
                        md:h-auto md:w-auto
                        ${
                            index === 0
                                ? "md:col-span-2 md:row-span-full"
                                : "md:aspect-[2/1]"
                        }`}
                    ></div>
                ))}
            </Layout>

            <Layout title="bảng xếp hạng" className={formLayout.layout_2}>
                {fakesData3.map((data, index) => (
                    <div
                        key={index}
                        className={`bg-red-400 h-[95px] grow shrink-0 w-[200px] 
                        md:h-auto md:w-auto
                        ${
                            index === 0
                                ? "md:col-span-2 md:row-span-full"
                                : "md:aspect-[2/1]"
                        }`}
                    ></div>
                ))}
            </Layout>

            <Layout
                title="anime movie"
                className="md:grid md:grid-cols-6 gap-x-3"
            >
                {fakesData2.map((data, index) => (
                    <div
                        key={index}
                        className="bg-red-400 md:aspect-[18/25]"
                    ></div>
                ))}
            </Layout>
        </main>
    );
}

export default Home;
