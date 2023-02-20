import { useState, useEffect, useRef } from "react";
import { sliders } from "../UI";

function useSlider() {
    const [indexImg, setIndexImg] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const timeInterval = useRef();

    const handleSlide = (direction) => {
        setProgress(0);
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

    useEffect(() => {
        if (!isHover) {
            timeInterval.current = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress === 100) {
                        const nextProgress = 0;
                        setIndexImg((prevIndex) => {
                            const nextIndex =
                                (prevIndex + 1) % (sliders.length + 1) || 1;
                            return nextIndex;
                        });
                        return nextProgress;
                    } else {
                        const nextProgress = prevProgress + 1;
                        return nextProgress;
                    }
                });
            }, 100);
        }

        return () => {
            clearInterval(timeInterval.current);
        };
    }, [isHover, indexImg]);

    const states = {
        indexImg,
        isHover,
        progress,
    };
    const methods = {
        setIndexImg,
        setIsHover,
        setProgress,
        handleSlide,
    };
    return [states, methods];
}

export default useSlider;
