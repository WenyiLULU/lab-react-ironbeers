import { useParams } from "react-router";
import Header from "./Header";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";
import axios from "axios";

const BeerDetails = () => {
    const {beer_id}= useParams()

    const [beer, setBeer] = useState({})
    const [fetching, setFetching] = useState(true)

    const getBeer = async (id) => {
        const response = await axios.get(`${API_URL}/${id}`)
        setFetching(false)
        setBeer(response.data)
    }

    useEffect(() => {
        getBeer(beer_id)
    }, [beer_id])

    return ( 
        <div>
            <Header />
            {fetching ?
            <div> Loading ...</div>
            :
            <div>
                <img src={beer.image_url} alt="beer img" style={{height: "300px"}} />
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.attenuation_level}</h3>
                </div>
                <div>
                    <h5>{beer.tagline}</h5>
                    <h6>{beer.first_brewed}</h6>
                </div>
                <p>{beer.description}</p>
                <h5>By: {beer.contributed_by}</h5>
            </div>

            }
        </div>
     );
}
 
export default BeerDetails;