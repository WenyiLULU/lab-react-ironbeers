import { useState } from "react";
import Header from "./Header";
import { API_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const NewBeer = () => {
    const [name, setName] = useState("")
    const [tagline, setTagline ] = useState("")
    const [description, setDescription ] = useState("")
    const [firstBrewed, setFirstBrewed ] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel , setAttenuationLevel] = useState(0)
    const [contributedBy , setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault()
        const body = { 
            name, 
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
         };
         console.log(body)
         axios
            .post(`${API_URL}/new`, body)
            .then((response) => {
                console.log(response)

                // Reset the state
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setAttenuationLevel(0);
                setContributedBy("");   
            });
            
        navigate('/beers')

    }

    return ( 
        <div>
            <Header />
            <div className="App">
                <h1>New Beer Discovered</h1>
                <form 
                style={{margin:"0 auto",display: "flex", flexDirection: "column", justifyContent: "center",width:"60%"}}
                onSubmit={handleSubmit}
                >
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
            
                    <label>Tagline</label>
                    <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                    />

                    <label>Description</label>
                    <textarea
                    type="text"
                    name="description"
                    rows="5" cols="33"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    ></textarea>
                    
                    <label>First Brewed</label>
                    <input
                    type="text"
                    name="firstBrewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={firstBrewed}
                    />
                    
                    <label>Brewers Tips</label>
                    <input
                    type="text"
                    name="brewersTips"
                    onChange={(e) => setBrewersTips(e.target.value)}
                    value={brewersTips}
                    />

                    <label>Attenuation Level</label>
                    <input
                    type="number"
                    name="attenuationLevel"
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                    value={attenuationLevel}
                    />

                    <label>Contributed By</label>
                    <input
                    type="text"
                    name="contributedBy"
                    onChange={(e) => setContributedBy(e.target.value)}
                    value={contributedBy}
                    />
                    
                    <button type="submit">Create a New Beer</button>
                    
                </form>
            </div>
        </div> );
}
 
export default NewBeer;