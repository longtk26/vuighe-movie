function Layout({ title, className, children }) {
    return (
        <section className="md:mt-4 mt-5 mb-8">
            <h1 className="text-[25px] text-red-700 uppercase mb-1">{title}</h1>
            <div className={className}>{children}</div>
        </section>
    );
}

export default Layout;

export const layout_1 =
    "grid md:grid-cols-4 grid-rows-3 gap-2 h-auto grid-cols-2";

export const layout_2 =
    "md:grid md:grid-cols-6 snap-x snap-mandatory md:grid-rows-2 gap-2 lg:gap-3 flex overflow-x-scroll scrollbar-none";

export const layout_3 =
    "md:grid md:grid-cols-6 snap-x snap-mandatory flex gap-3 overflow-x-scroll scrollbar-none";

export const layout_movie = "grid md:grid-cols-6 md:gap-3 grid-cols-2 gap-2";

export const children_1 =
    "relative cursor-pointer overflow-hidden group aspect-video";

export const children_2 =
    "relative cursor-pointer overflow-hidden group snap-start snap-always grow shrink-0 w-[200px] md:h-auto md:w-auto first:col-span-2 first:row-span-2 md:aspect-[2/1] first:aspect-[3/1.55]";

export const children_3 =
    "relative cursor-pointer overflow-hidden group shrink-0 snap-start snap-always md:aspect-[2/3] w-[150px] h-[208px] md:h-auto md:w-auto";

export const children_rank =
    "relative cursor-pointer overflow-hidden group h-[112px] snap-start snap-always grow shrink-0 w-[200px] md:h-auto md:w-auto first:col-span-2 first:row-span-2 md:aspect-[2/1] first:aspect-[3/1.55]";

export const children_movie =
    "relative cursor-pointer overflow-hidden group aspect-[2/3] md:h-auto md:w-auto";
