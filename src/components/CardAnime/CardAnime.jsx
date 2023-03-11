function CardAnime({ className, img }) {
    return (
        <div className={className}>
            <img src={img} alt="anime" className="w-full h-full" />
        </div>
    );
}

export default CardAnime;
