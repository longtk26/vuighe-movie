function AnimeSearch({ img, title, views }) {
    return (
        <div className="flex items-center mt-4 cursor-pointer hover-red">
            <div className="h-[56px] w-[100px] mr-2 overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="h-full w-full transition-transform duration-300"
                />
            </div>
            <div>
                <h4 className="text-[13px] text-[#333] effect transition-all">
                    {title}
                </h4>
                <p className="text-[11px] text-[#888] effect transition-all mt-1">
                    {views} lượt xem
                </p>
            </div>
        </div>
    );
}

export default AnimeSearch;
