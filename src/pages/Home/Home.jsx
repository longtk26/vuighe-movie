import { useEffect } from "react";
import { Slider, Banner } from "../../components";
import {
    Collection,
    Ranking,
    NewEpisode,
    AllAnime,
    AnimeMovie,
    WhatSee,
} from "../../containers";

function Home() {
    useEffect(() => {
        document.title = "Vuighe-anime";
    }, []);

    return (
        <main className="lg:px-12 md:px-3 relative -z-10 px-2 md:w-[800px] md:m-auto lg:w-full lg:m-0">
            <div className="mt-20 mb-6 md:h-[165px] lg:h-[300px] flex items-center md:gap-x-2 md:flex-row flex-col gap-y-2">
                <Slider />
                <Banner />
            </div>
            <NewEpisode />
            <Collection />
            <Ranking />
            <AnimeMovie />
            <WhatSee />
            <AllAnime />
        </main>
    );
}

export default Home;
