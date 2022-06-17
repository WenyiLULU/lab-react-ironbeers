import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png"

const Header = () => {
    return ( 
        <div style={{backgroundColor: "lightblue", padding:"10px"}}>
            <Link to="/"><img src={homeIcon} alt="Home" style={{height: "100px"}} /></Link>
        </div>
     );
}
 
export default Header;