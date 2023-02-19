import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function SliderBtn({ left, right, onSetIndex }) {
    const direction = left ? "left" : "right";
    return (
        <button
            className={`w-12 h-12 bg-slate-500 absolute z-10 top-[50%] translate-y-[-50%]
        ${
            right ? "right-0 rounded-l-3xl" : "left-0 rounded-r-3xl"
        } justify-center items-center bg-black/[0.5] border-none z-10 slide-btn hidden`}
            onClick={() => onSetIndex(direction)}
        >
            {left && <FiArrowLeft className="text-white" size={28} />}
            {right && <FiArrowRight className="text-white" size={28} />}
        </button>
    );
}

export default SliderBtn;
