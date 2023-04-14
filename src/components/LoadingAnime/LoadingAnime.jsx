import { formLayout } from "../../Layout";

function LoadingAnime() {
    return (
        <div
            className={`${formLayout.children_1} bg-slate-50 mt-4 flex items-center justify-center`}
        >
            <div
                className="w-10 h-10 border-4 border-[#f3f3f3] rounded-[50%] 
            border-t-red-400 dark:border-t-teal-400 animate-spin"
            ></div>
        </div>
    );
}

export default LoadingAnime;
