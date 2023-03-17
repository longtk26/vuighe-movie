import {
    TypeCardHorizontal,
    TypeCardRank,
    TypeCardVertical,
} from "./TypeCards";

function CardAnime({ className, img, typeCard, data }) {
    return (
        <div className={className}>
            <img
                src={img}
                alt="anime"
                className={`w-full h-full 
                ${
                    typeCard !== "rank"
                        ? "group-hover:scale-110 transition-transform duration-300"
                        : ""
                }`}
            />
            {typeCard === 1 && <TypeCardHorizontal />}
            {typeCard === "rank" && <TypeCardRank data={data} />}
            {typeCard === 3 && <TypeCardVertical />}
        </div>
    );
}

export default CardAnime;
