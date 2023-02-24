import { Slider, Banner } from "../../components";

function Home() {
    return (
        <main
            className="lg:px-8 md:px-3 relative -z-10 px-2 md:w-[768px] md:m-auto
        lg:w-full lg:m-0"
        >
            <div
                className="mt-20 md:h-[165px] lg:h-[280px] flex items-center md:gap-x-2
            md:flex-row flex-col gap-y-2"
            >
                <Slider />
                <Banner />
            </div>
        </main>
    );
}

export default Home;
