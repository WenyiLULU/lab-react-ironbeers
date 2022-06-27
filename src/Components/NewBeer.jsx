import { useState } from "react";
import Header from "./Header";
import { API_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputWrapper, Input, Textarea, NumberInput, Button } from '@mantine/core';


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
            <Header>New Beer Discovered</Header>
            <div className="App">
                
                <form 
                style={{margin:"30px auto",display: "flex", flexDirection: "column", justifyContent: "center",width:"60%"}}
                onSubmit={handleSubmit}
                >
                    <InputWrapper
                        id="input-demo"
                        required
                        label="Name of the beer"
                        size="md"
                        >
                        <Input 
                        id="input-demo" 
                        placeholder="Name of the beer" 
                        radius="lg"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </InputWrapper>
                    
                    <InputWrapper
                        id="input-demo"
                        required
                        label="Tagline"
                        size="md"
                        >
                        <Input 
                        id="input-demo" 
                        placeholder="Tagline" 
                        radius="lg"
                        type="text"
                        name="tagline"
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                        />
                    </InputWrapper>

                    <Textarea
                        placeholder="Description of the beer"
                        label="Description"
                        radius="lg"
                        size="md"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <InputWrapper
                        id="input-demo"
                        label="First Brewed"
                        size="md"
                        >
                        <Input 
                        id="input-demo" 
                        placeholder="Date of First Brewed" 
                        radius="lg"
                        type="text"
                        name="firstBrewed"
                        onChange={(e) => setFirstBrewed(e.target.value)}
                        value={firstBrewed}
                        />
                    </InputWrapper>
                    <InputWrapper
                        id="input-demo"
                        label="Brewers Tips"
                        size="md"
                        >
                        <Input 
                        id="input-demo" 
                        placeholder="Brewers Tips" 
                        radius="lg"
                        type="text"
                        name="brewersTips"
                        onChange={(e) => setBrewersTips(e.target.value)}
                        value={brewersTips}
                        />
                    </InputWrapper>
                    <InputWrapper
                        id="input-demo"
                        label="Attenuation Level"
                        size="md"
                        >
                        <NumberInput 
                        id="input-demo" 
                        placeholder= "Attenuation Level"
                        radius="lg"
                        type="number"
                        name="attenuationLevel"
                        onChange={(value) => setAttenuationLevel(value)}
                        defaultValue={attenuationLevel}
                        />
                    </InputWrapper>
                    <InputWrapper
                        id="input-demo"
                        label="Contributed By"
                        size="md"
                        >
                        <Input 
                        id="input-demo" 
                        placeholder="Contributor's name" 
                        radius="lg"
                        type="text"
                        name="contributedBy"
                        onChange={(e) => setContributedBy(e.target.value)}
                        value={contributedBy}
                        />
                    </InputWrapper>
                    
                    <Button radius="lg" size="md" uppercase type="submit" style={{margin:"20px 0"}}>Create a New Beer</Button>
                    
                </form>
            </div>
        </div> );
}
 
export default NewBeer;