import { useNavigate } from "react-router-dom";
import { useDispatch, useTrip } from "../../Context/TripContext";

export function Continent(){
    const { dispatch } = useDispatch();
  const {TripData} = useTrip();
  const navigate = useNavigate()

    const handleClick = (continent) => {
        navigate("/Country", {state: {continent}})
    }

    return(
        <>
        <h1>Welcome to Trip Advisor</h1>
        <h3>Top continents for your next holiday</h3>
        <div className="ImageSet">
            {TripData.continents.map((continent) => {
                return(
                    <div onClick={()=>handleClick(continent)}>
                        <img src={continent.image} />
                        <p>{continent.name}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}