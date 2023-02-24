import { sliders } from "../../UI";

function SliderImg({ indexImg }) {
    return (
        <>
            {sliders.map((slider) => (
                <div
                    key={slider.id}
                    className={`${
                        indexImg === slider.id ? "block" : "hidden"
                    } relative`}
                >
                    <img
                        src={slider.img}
                        alt={slider.name}
                        className={`object-cover w-full h-full`}
                    />
                    <div
                        className="absolute bottom-0 w-full bg-gradient-to-b
                    from-transparent to-[#000000bf] pt-4 pb-2 md:pb-[12px] pl-[12px]"
                    >
                        <span className="text-[12px] font-extralight text-white">
                            {slider.views && `${slider.views} lượt xem`}
                        </span>

                        <h2 className="text-white text-[18px] truncate w-[370px] hidden lg:block">
                            {slider.name}
                        </h2>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SliderImg;
