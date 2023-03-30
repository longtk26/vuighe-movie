import { sliders } from "../../UI";
import SliderBtn from "./SliderBtn";
import SliderImg from "./SliderImg";
import { useSlider } from "../../hooks";

function Slider() {
    const [states, methods] = useSlider();
    const { indexImg, progress } = states;
    const { setIndexImg, setIsHover, setProgress, handleSlide } = methods;

    return (
        <div
            className="h-full md:w-[550px] grow-[10] relative slider cursor-pointer"
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
        >
            <SliderBtn onSetIndex={handleSlide} left />
            <div className="w-full h-full flex relative">
                <SliderImg indexImg={indexImg} onSetIndex={setIndexImg} />
            </div>
            <SliderBtn onSetIndex={handleSlide} right />

            <div className="absolute bottom-1 left-[50%] translate-x-[-50%]">
                {sliders.map((slider) => (
                    <button
                        key={slider.id}
                        className={`w-[10px] h-[3px] bg-gray-400 mr-2 rounded-full
                        ${indexImg === slider.id ? "bg-red-500" : ""}`}
                        onClick={() => {
                            setIndexImg(slider.id);
                            setProgress(0);
                        }}
                    ></button>
                ))}
            </div>
            <div
                className={`h-[2px] bg-red-500 absolute bottom-0`}
                style={{ width: progress + "%" }}
            ></div>
        </div>
    );
}

export default Slider;
