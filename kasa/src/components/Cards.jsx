import rentalsData from "../data/advertisement.json"

function Card({title, cover}) {
    return(
        <div className="cardContainer">
            <img src={cover} />
            <span> {title} </span>
        </div>
    )
}

export default Card