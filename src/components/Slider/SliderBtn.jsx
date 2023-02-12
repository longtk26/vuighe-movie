import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function SliderBtn({ left, right }) {
    return (
        <button
            className={`w-12 h-12 bg-slate-500 absolute top-[50%] translate-y-[-50%]
        ${
            right ? "right-0 rounded-l-3xl" : "left-0 rounded-r-3xl"
        } flex justify-center items-center bg-black/[0.5] border-none`}
        >
            {left && <FiArrowLeft className="text-white" size={28} />}
            {right && <FiArrowRight className="text-white" size={28} />}
        </button>
    );
}

export default SliderBtn;
