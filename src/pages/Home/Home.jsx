import { Slider } from "../../components";

function Home() {
    return (
        <main className="px-14 relative -z-10">
            <div className="mt-20 h-[280px] flex flex-wrap items-center gap-x-2">
                <Slider />
                <div className="h-full bg-black grow"></div>
            </div>
        </main>
    );
}

export default Home;
