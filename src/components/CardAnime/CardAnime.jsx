function CardAnime({ className, img, typeCard, data }) {
    return (
        <div className={className}>
            <img
                src={img}
                alt="anime"
                className={`w-full h-full 
                ${
                    typeCard !== "rank"
                        ? "group-hover:scale-110 transition-transform duration-300"
                        : ""
                }`}
            />
            {typeCard === 1 && (
                <div
                    className="absolute h-[100px] bottom-0 right-0 left-0 bg-gradient-to-b from-transparent 
                to-black text-white lg:p-3 group-hover:to-cyan-900 px-1"
                >
                    <h3 className="xl:text-[16px] xl:mb-1 lg:mt-[36px] text-sm truncate mt-[60px] md:mt-14">
                        Kami-tachi ni Hirowareta Otoko
                    </h3>
                    <div className="flex justify-between items-center font-thin text-[10px] md:text-[12px]">
                        <p className="block xl:w-[135px] w-[72px] truncate">
                            Tập 22 - Ryoma và slime bay
                        </p>
                        <span>3,763 lượt xem</span>
                    </div>
                </div>
            )}
            {typeCard === "rank" && (
                <div
                    className="absolute inset-0 px-1 text-white text-sm group-hover:to-black/50
                bg-gradient-to-tl from-transparent to-black flex flex-col-reverse justify-between 
                pb-[2px] xl:text-[16px] xl:pb-2 xl:px-3"
                >
                    <h1
                        className={`absolute top-[-26px] left-2 text-[50px] 
                        bg-gradient-to-b from-amber-500 to-red-500 bg-clip-text text-transparent h-full md:h-[30px] flex items-center
                        ${
                            data === 1
                                ? "md:text-[60px] md:h-full md:top-[-40px] xl:top-[-80px] lg:top-[-50px]"
                                : "md:text-[26px] md:top-1 lg:text-[35px] lg:top-3 lg:left-3"
                        }`}
                    >
                        {data}
                    </h1>
                    <span
                        className={`block truncate absolute w-[194px]
                    ${
                        data === 1
                            ? "md:w-[162px] lg:w-[186px]"
                            : "md:w-[58px] xl:w-[180px]"
                    }`}
                    >
                        Tensei Oujo to Tensai Reijou no Mahou Kakumei
                    </span>
                </div>
            )}
        </div>
    );
}

export default CardAnime;
