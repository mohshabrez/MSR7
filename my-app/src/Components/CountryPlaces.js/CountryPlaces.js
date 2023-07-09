import { useLocation } from "react-router-dom"

export function CountryPlaces(){
    const location = useLocation()
    const user = location.state.country
    return(
        <>
        <h1>I am Country Places</h1>
        <div>
            {user.destinations.map((destination) => {
                return(
                    <div>
                    <img src={destination.image}/>
                    <p>{destination.name}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}