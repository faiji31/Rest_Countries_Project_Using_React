import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handlevisitedCountries=(country)=>{
        console.log('clicked',country)

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    
    
   
    return (
        <div >
            <h1>Welcome to country:{countries.length}</h1>
            <h3>Total Countries visited: </h3>
           <div className="countries">
             {
                countries.map(country=><Country country={country} handlevisitedCountries={handlevisitedCountries} ></Country>)
            }
           </div>
           
        </div>
    );
};

export default Countries;