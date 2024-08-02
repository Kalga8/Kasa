import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"
import rentalsData from "../data/advertisement.json"
import TitleRentals from "../components/TitleRentals"
import Host from "../components/Host"
import Tags from "../components/Tags"
import Rates from "../components/Rates"

function Rentals() {
    const {id}=useParams(); /*Hook récupérant l'id depuis URL*/
    const selectedRental=rentalsData.find((appartement) =>
        appartement.id===id);
    
    return (
        <div className="informationsRentals">
                <Carousel
                pictures={selectedRental.pictures}
                />
                
                <TitleRentals
                title={selectedRental.title}
                location={selectedRental.location}/>

                <Host 
                name={selectedRental.host.name}
                picture={selectedRental.host.picture}
                />

                <Tags
                tags={selectedRental.tags}/>

                <Rates 
                rating={selectedRental.rating}/>
        </div>
    )
}

export default Rentals