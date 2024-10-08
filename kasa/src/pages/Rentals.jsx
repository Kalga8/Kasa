import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import rentalsData from "../data/advertisement.json";
import TitleRentals from "../components/TitleRentals";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rates from "../components/Rates";
import Collapse from "../components/Collapse";

function Rentals() {
  const { id } = useParams(); /*Hook récupérant l'id depuis URL*/
  const selectedRental = rentalsData.find(
    (appartement) => appartement.id === id
  );

  /*Gestion erreur id*/
  if (!selectedRental) {
    return <Navigate to="Error" />;
  }

  return (
    <div className="informationsRentals">
      <Carousel pictures={selectedRental.pictures} />
      <div className="informationsContainer">
        <div className="titleTags">
          <TitleRentals
            title={selectedRental.title}
            location={selectedRental.location}
          />

          <Tags tags={selectedRental.tags} />
        </div>

        <div className="hostRatings">
          <Host
            name={selectedRental.host.name}
            picture={selectedRental.host.picture}
          />

          <Rates rating={selectedRental.rating} />
        </div>
      </div>

      <div className="collapseRentals">
        <Collapse title={"Description"} text={selectedRental.description} />

        <Collapse title={"Équipements"} text={selectedRental.equipments} />
      </div>
    </div>
  );
}

export default Rentals;
