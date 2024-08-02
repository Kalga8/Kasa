import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"
import rentalsData from "../data/advertisement.json"
import TitleRentals from "../components/TitleRentals";

function Rentals() {
    const {id}=useParams(); /*Hook récupérant l'id depuis URL*/
    const selectedRental=rentalsData.find((appartement) =>
        appartement.id===id);
    
    return (
        <div>
            <div className="carouselContainer">
                <Carousel
                pictures={selectedRental.pictures}
                />
            </div>

            <div className="informationContainer">
                <TitleRentals
                title={selectedRental.title}
                location={selectedRental.location}/>
            </div>
        </div>
    )
}

export default Rentals