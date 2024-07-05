function Banner ({background, title}) {
    return (
        <div className="banner-container">
            <div className="background-banner">
                <div className="banner" style={{ backgroundImage: `url(${background})` }}/>
                <div className="banner-title">
                    <h2> {title} </h2>
                </div>
            </div>
        </div>
    )
}

export default Banner