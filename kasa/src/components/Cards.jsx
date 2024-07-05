function Card({title, cover}) {
    return(
            <div className="cardBlock">
                <div className="imageEffect" />
                <div className="imageContainer">
                    <img src={cover} alt=""/>
                </div>

                <div className="titleCard">
                <h3> {title} </h3>
                </div>
            </div>
    )
}

export default Card