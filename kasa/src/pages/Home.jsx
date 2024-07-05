import Banner from "../components/Banner"
import Card from "../components/Cards"
import background from "../assets/banners/banner-home.png"

function Home() {
    return(
        <div homeBody>
            <Banner 
            title="Chez vous, partout ailleurs"
            background={background}
            />
            

            <div cardsContainer>
                <Card 
                />
            </div>
        </div>
    )
}

export default Home