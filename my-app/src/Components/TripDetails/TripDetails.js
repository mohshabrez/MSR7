import { useParams } from "react-router-dom";
import { TripData } from "../../Data/TripData";

export function TripDetails(){
    const { TripId } = useParams();
    const data = TripData.continents.map((continent) => continent.countries.map((country) => country.destinations.find((destination) => destination.id.toString() === TripId.toString() )))
    
    console.log(data)
    
    return(
        <>
        <h1>Trip Details</h1>
        <div>
            <img src={data.image} />
        </div>
        </>
    )
}