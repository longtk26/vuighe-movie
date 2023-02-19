import { useState } from "react";
import { sliders } from "../../UI";
import SliderBtn from "./SliderBtn";
import SliderImg from "./SliderImg";

function Slider() {
    const [indexImg, setIndexImg] = useState(1);

    const handleSlide = (direction) => {
        switch (direction) {
            case "left":
                setIndexImg((prevIndex) => {
                    if (prevIndex === 1) {
                        prevIndex = sliders.length;
                    } else {
                        prevIndex -= 1;
                    }
                    return prevIndex;
                });
                break;
            case "right":
                setIndexImg((prevIndex) => {
                    if (prevIndex === sliders.length) {
                        prevIndex = 1;
                    } else {
                        prevIndex += 1;
                    }
                    return prevIndex;
                });
                break;
            default:
                console.log("Direction is unvalid");
        }
    };

    return (
        <div className="h-full w-[900px] relative slider cursor-pointer">
            <SliderBtn onSetIndex={handleSlide} left />
            <div className="w-full h-full flex relative">
                <SliderImg indexImg={indexImg} />
            </div>
            <SliderBtn onSetIndex={handleSlide} right />
            <div className="absolute bottom-1 left-[50%] translate-x-[-50%]">
                {sliders.map((slider) => (
                    <button
                        key={slider.id}
                        className={`w-[10px] h-[3px] bg-gray-400 mr-2 rounded-full
                        ${indexImg === slider.id ? "bg-red-500" : ""}`}
                        onClick={() => setIndexImg(slider.id)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Slider;
