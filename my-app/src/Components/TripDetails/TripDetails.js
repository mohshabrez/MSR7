import { useLocation, useParams } from "react-router-dom";
import { TripData } from "../../Data/TripData";

export function TripDetails(){
    
    const location = useLocation()
    const user = location.state.destination
    
    return(
        <>
        <h1>{user.name}</h1>
        <div>
            <img src={user.image} />
            <p>Description: {user.description}</p>
            <p>Ratings: {user.ratings}</p>
            <p>Reviwes: {user.reviews}</p>
            <p>Location: {user.location}</p>
            <p>openingHours: {user.openingHours}</p>
            <p>ticketPrice: {user.ticketPrice}</p>
            <a href={user.website} target="_blank" rel="noreferrer">Website</a>
        </div>
        </>
    )
}