import { sliders } from "../../UI";
import SliderBtn from "./SliderBtn";

function Slider() {
    return (
        <div className="h-full w-[880px] relative -z-10">
            <SliderBtn left />
            <div className="w-full h-full flex ">
                {sliders.map((slider) => (
                    <img
                        key={slider.id}
                        src={slider.img}
                        alt={slider.name}
                        className="object-cover w-full h-full"
                    />
                ))}
            </div>
            <SliderBtn right />
        </div>
    );
}

export default Slider;
