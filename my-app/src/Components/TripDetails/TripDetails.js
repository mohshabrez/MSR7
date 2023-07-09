import { useLocation, useParams } from "react-router-dom";
import { TripData } from "../../Data/TripData";

export function TripDetails(){
    
    const location = useLocation()
    const user = location.state.destination
    
    return(
        <>
        <h1>Trip Details</h1>
        <div>
            <img src={user.image} />
        </div>
        </>
    )
}