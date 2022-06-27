import { Link } from "react-router-dom";
import logo from "../assets/ironbeer-logo.png"
import { Grid } from "@mantine/core";


const Header = ({children}) => {
    return ( 
   
        <Grid align="center" style={{backgroundColor: "#2dc5fa", padding:"10px", width:"100%", padding:"20px", margin: "auto"}}>
            <Grid.Col span={4}>
                <Link to="/"><img src={logo} alt="Home" style={{height: "100px"}} /></Link>
            </Grid.Col>
            <Grid.Col span={4}><h1 style={{fontSize:"45px", color:"white", textAlign:"center"}}>{children}</h1></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
        </Grid>
        

        
     );
}
 
export default Header;