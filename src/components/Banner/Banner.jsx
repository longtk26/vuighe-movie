import { Link } from "react-router-dom";
import { EndowIcon, CollectionIcon, RankIcon } from "./BannerIcons";

function Banner() {
    const banners = [
        {
            title: "ưu đãi",
            content: "dành riêng cho thành viên",
            background: "bg-gradient-to-r from-cyan-500 to-blue-500",
            icon: EndowIcon,
        },
        {
            title: "bảng xếp hạng",
            content: "anime được xem nhiều nhất",
            background: "bg-gradient-to-r from-sky-500 to-indigo-500",
            icon: RankIcon,
        },
        {
            title: "bộ sưu tập",
            content: "anime theo các chủ đề",
            background: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
            icon: CollectionIcon,
        },
    ];
    return (
        <div
            className="h-full w-full md:w-[260px] grow flex md:flex-col flex-row flex-wrap 
        lg:gap-y-3 gap-y-2 gap-x-2 justify-between"
        >
            {banners.map((banner, index) => {
                const Icon = banner.icon;
                return (
                    <Link
                        key={index}
                        className={`${
                            banner.background
                        } flex flex-col justify-center
                        relative md:p-0 py-[10px]
                        ${index === 0 ? "grow w-full" : "grow"}`}
                    >
                        <div className="capitalize text-white ml-4">
                            <h1 className="lg:font-[400] xl:font-medium lg:text-[20px] md:text-sm">
                                {banner.title}
                            </h1>
                            <span
                                className="font-extralight mt-2 lg:text-[12px] xl:text-sm hidden 
                            lg:block"
                            >
                                {banner.content}
                            </span>
                        </div>
                        <Icon
                            className="absolute right-2 lg:top-2 text-white/25 
                        md:w-[50px] md:h-[50px] md:top-0 w-[40px] h-[40px]"
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default Banner;
