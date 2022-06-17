import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

const Home = () => {
    return ( 
        <div>
            <div>
                <img src={allBeers} alt="beers pic"/>
                <h1><Link to='/beers'>Beers Gallery</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl. </p>
            </div>
            <div>
                <img src={newBeer} alt="beers pic"/>
                <h1><Link to='/random-beer'>Random Beer for Tonight</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl. </p>            
            </div>
            <div>
                <img src={randomBeer} alt="beers pic"/>
                <h1><Link to='/new-beer'>New Beer Discovered</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ultricies elit. Nam tincidunt, tortor eget pulvinar lacinia, nibh nunc laoreet sem, et aliquet augue mi ac lectus. Nam hendrerit placerat elit non hendrerit. Sed pharetra magna sit amet leo dapibus, eget gravida dolor gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est nisl. </p>
            </div>
        </div>
        
     );
}
 
export default Home;