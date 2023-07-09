import { Link, useLocation, useNavigate } from "react-router-dom"

export function CountryPlaces(){
    const location = useLocation()
    const user = location.state.country
    const navigate = useNavigate()

    const handleClick = (destination) => {
        navigate("/TripDetails", {state: {destination}})
    }

    return(
        <>
        <h1>I am Country Places</h1>
        <div className="ImageSet">
        
            {user.destinations.map((destination) => {
                return(
                    <div onClick={() => handleClick(destination)}>
                    <img src={destination.image}/>
                    <p>{destination.name}</p>
                    </div>
                )
            })}
           
        </div>
        </>
    )
}