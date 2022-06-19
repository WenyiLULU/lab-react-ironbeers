import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { Grid } from "@mantine/core";
import { API_URL } from "../constants";
import { Loader } from '@mantine/core';
import { Input } from '@mantine/core';
import { BiSearchAlt } from 'react-icons/bi';


const AllBeers = () => {
    const navigate = useNavigate();

    const [beerList, setBeerList] = useState ([])
    const [fetching, setFetching] = useState(true)
    const [query, setQuery] = useState("true")

    const getBeerList = async () => {
        const response = await axios.get(API_URL)
        setFetching(false)
        setBeerList(response.data)
    }
    const searchBeerList = async (query) => {
        const response = await axios.get(`${API_URL}/search?q=${query}`)
        setFetching(false)
        setBeerList(response.data)
    }

    useEffect(() => {
        getBeerList()
    }, [])

    useEffect(() => {
        searchBeerList(query)
    }, [query])

    return ( 
        
        <div>
            <Header>Beers Galary</Header>

            <Input
                icon={<BiSearchAlt />}
                placeholder="Search for beer"
                radius="xl"
                size="md"
                style={{width: "70%", margin:"20px auto"}}
                onChange={(e)=>{setQuery(e.target.value)}}
                />
            
            {fetching ? 
            <Loader color="gray" size="xl" style={{margin:"30px auto"}}/>
            :
            <Grid style={{padding: "40px"}}>
                {beerList.map( (beer) => 
                    <Grid.Col 
                        span={6} 
                        key={beer._id} 
                        
                        onClick={()=>{navigate(`/beers/${beer._id}`)}}
                     >
                        <div style={{display: "flex", padding:"10px", border:"1px solid gray", borderRadius:"10px", margin:"5px", boxShadow: "5px 5px 5px lightblue", cursor: "pointer"}}>
                            <img src={beer.image_url} alt="beer pic" style={{height:"150px", margin:"10px"}} />
                            <div>
                                <h3>{beer.name}</h3>
                                <h5>{beer.tagline}</h5>
                                <p><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>
                        </div>
                        
                    </Grid.Col>
                )}
            </Grid>}
        </div>
     );
}
 
export default AllBeers;