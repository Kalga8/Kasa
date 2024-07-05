import Banner from "../components/Banner"
import Card from "../components/Cards"
import background from "../assets/banners/banner-home.png"
import rentalsData from "../data/advertisement.json"

function Home() {
    return(
        <div className="homeBody">
            <Banner 
            title="Chez vous, partout ailleurs"
            background={background}
            />

            <div className="sectionCards">
                <div className="cardsContainer">
                    {rentalsData.map((rental) => (
                        <Card
                        key={'${rental.id}'}
                        title={rental.title}
                        cover={rental.cover}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home