
import Header from "./Header";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";
import axios from "axios";


const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState({})
    const [fetching, setFetching] = useState(true)

    const getBeer = async () => {
        const response = await axios.get(`${API_URL}/random`)
        setFetching(false)
        setRandomBeer(response.data)
    }

    useEffect(() => {
        getBeer()
    }, [])

    return ( 
        <div>
            <Header />
            <h1>Random Beer for Tonight</h1>
            <div>
                {fetching ?
                <div> Loading ...</div>
                :
                <div>
                    <img src={randomBeer.image_url} alt="beer img" style={{height: "300px"}} />
                    <div>
                        <h2>{randomBeer.name}</h2>
                        <h3>{randomBeer.attenuation_level}</h3>
                    </div>
                    <div>
                        <h5>{randomBeer.tagline}</h5>
                        <h6>{randomBeer.first_brewed}</h6>
                    </div>
                    <p>{randomBeer.description}</p>
                    <h5>By: {randomBeer.contributed_by}</h5>
                </div>
                }
            </div>
        </div> );
}
 
export default RandomBeer;