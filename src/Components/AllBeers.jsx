import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { Grid } from "@mantine/core";
import { API_URL } from "../constants";

const AllBeers = () => {
    const navigate = useNavigate();

    const [beerList, setBeerList] = useState ([])
    const [fetching, setFetching] = useState(true)

    const getBeerList = async () => {
        const response = await axios.get(API_URL)
        setFetching(false)
        setBeerList(response.data)
    }

    useEffect(() => {
        getBeerList()
    }, [])

    return ( 
        <div>
            <Header />
            <h1>Beers Galary</h1>

            {fetching ? 
            <div> Loading ...</div>
            :
            <Grid>
                {beerList.map( (beer) => 
                    <Grid.Col 
                        span={6} 
                        key={beer._id} 
                        style={{display: "flex", padding:"10px"}}
                        onClick={()=>{navigate(`/beers/${beer._id}`)}}
                     >
                        <img src={beer.image_url} alt="beer pic" style={{height:"150px", margin:"10px"}} />
                        <div>
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </Grid.Col>
                )}
            </Grid>}
        </div>
     );
}
 
export default AllBeers;