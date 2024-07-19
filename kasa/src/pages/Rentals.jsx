import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"
import rentalsData from "../data/advertisement.json"

function Rentals() {
    const {id}=useParams(); /*Hook récupérant l'id depuis URL*/
    const selectedRental=rentalsData.find((appartement) =>
        appartement.id=id);

    return (
        <div className="carouselContainer">
            <Carousel
            pictures={selectedRental.pictures}
            />
        </div>
    )
}

export default Rentals