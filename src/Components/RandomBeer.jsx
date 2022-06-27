
import Header from "./Header";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from '@mantine/core';


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
            <Header>Random Beer for Tonight</Header>
            
            <div>
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
                        }}
                >
                    <div><img src={randomBeer.image_url} alt="beer img" style={{height: "300px"}} /></div>
                    <div style={{width:"350px"}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin:"0 autos"}}>
                            <p style={{fontSize:"25px"}}><strong>{randomBeer.name}</strong></p>
                            <p>{randomBeer.attenuation_level}</p>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin:"0 autos"}}>
                            <h5>{randomBeer.tagline}</h5>
                            <h6>{randomBeer.first_brewed}</h6>
                        </div>
                        <p >{randomBeer.description}</p>
                        <h5>By: {randomBeer.contributed_by}</h5>
                    </div>
                    
                </div>
                }
            </div>
        </div> );
}
 
export default RandomBeer;