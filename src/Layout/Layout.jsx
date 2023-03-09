function Layout({ title, className, children }) {
    return (
        <section className="md:mt-10 mt-5">
            <h1 className="text-[25px] text-red-700 uppercase mb-1">{title}</h1>
            <div className={className}>{children}</div>
        </section>
    );
}

export default Layout;

export const layout_1 =
    "grid md:grid-cols-4 grid-rows-3 gap-2 h-auto grid-cols-2";
export const layout_2 =
    "md:grid md:grid-cols-6 md:grid-rows-2 gap-2 lg:gap-3 flex overflow-x-scroll scrollbar-none";
