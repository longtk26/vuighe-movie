function AnimeSearch({ img, title, views }) {
    return (
        <div className="flex items-center mt-4 cursor-pointer group/item">
            <div className="h-[56px] w-[100px] mr-2 overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover group-hover/item:scale-125 transition-transform"
                />
            </div>
            <div>
                <h4
                    className="text-[13px] text-[#333] group-hover/item:text-red-500 
                    dark:text-gray-400 transition-all dark:group-hover/item:text-teal-500"
                >
                    {title}
                </h4>
                <p
                    className="text-[11px] group-hover/item:text-red-500 text-[#888] 
                transition-all mt-1 dark:group-hover/item:text-teal-500"
                >
                    {views} lượt xem
                </p>
            </div>
        </div>
    );
}

export default AnimeSearch;
