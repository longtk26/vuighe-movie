import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function SliderBtn({ left, right, onSetIndex }) {
    const direction = left ? "left" : "right";
    return (
        <button
            className={`md:w-12 md:h-12 w-[40px] h-[40px] bg-slate-500 absolute z-10 flex top-[50%] translate-y-[-50%]
        ${
            right ? "right-0 rounded-l-3xl" : "left-0 rounded-r-3xl"
        } justify-center items-center bg-black/[0.5] border-none z-10 slide-btn lg:hidden`}
            onClick={() => onSetIndex(direction)}
        >
            {left && (
                <FiArrowLeft className="text-white md:text-[28px] text-[25px]" />
            )}
            {right && (
                <FiArrowRight className="text-white md:text-[28px] text-[25px]" />
            )}
        </button>
    );
}

export default SliderBtn;
