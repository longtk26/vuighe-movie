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
                className={`w-full h-full object-cover
                ${
                    typeCard !== "rank"
                        ? "group-hover:scale-110 transition-transform duration-300"
                        : ""
                }`}
            />
            {typeCard === 1 && <TypeCardHorizontal data={data} />}
            {typeCard === "rank" && <TypeCardRank data={data} />}
            {typeCard === 3 && <TypeCardVertical data={data} />}
        </div>
    );
}

export default CardAnime;
