import { useParams } from "react-router";
import Header from "./Header";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from '@mantine/core';


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
            <Header>Beer Ditails</Header>
            {fetching ?
            <Loader color="gray" size="xl" style={{margin:"30px auto"}}/>
            :
            <div 
                style={{
                    display: "flex", 
                    justifyContent:"space-around", 
                    alignItems:"center",
                    padding:"20px", width:"60%", 
                    border:"1px solid gray", 
                    borderRadius:"10px", 
                    margin:"20px auto", 
                    boxShadow: "5px 5px 5px lightblue", 
                    cursor: "pointer"
                    }}>
                <div><img src={beer.image_url} alt="beer img" style={{height: "300px"}} /></div>
                <div style={{width:"350px"}}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin:"0 autos"}}>
                        <p style={{fontSize:"25px"}}><strong>{beer.name}</strong></p>
                        <p>{beer.attenuation_level}</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin:"0 autos"}}>
                        <h5>{beer.tagline}</h5>
                        <h6>{beer.first_brewed}</h6>
                    </div>
                    <p >{beer.description}</p>
                    <h5>By: {beer.contributed_by}</h5>
                </div>
                
            </div>

            }
        </div>
     );
}
 
export default BeerDetails;