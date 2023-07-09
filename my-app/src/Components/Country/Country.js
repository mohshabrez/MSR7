import { useLocation, useNavigate } from "react-router-dom"

export function Country(){
    const location = useLocation()
    const user = location.state.continent
    const navigate = useNavigate()

    const handleClick = (country) => {
        navigate("/CountryPlaces", {state: {country}})
    }
    return(
        <>
        <h1>I am country page</h1>
        <div className="ImageSet">
            {user.countries.map((country) => {
                return(
                    <div onClick={()=>handleClick(country)}>
                    <img src={country.image}/>
                    <p>{country.name}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}