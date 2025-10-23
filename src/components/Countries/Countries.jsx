import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [contriesFlag , setContriesFlag]=useState([]);
    const handlevisitedCountries=(country)=>{
       const newvisitedCountries = [...visitedCountries, country];
       setVisitedCountries(newvisitedCountries);
    }

    const handleVisitedFlag =(flag)=>{
        const newvisitedFlags =[...contriesFlag,flag]
        setContriesFlag(newvisitedFlags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    
    
   
    return (
        <div >
            <h1>Welcome to country:{countries.length}</h1>
            <h3>Total Countries visited: {visitedCountries.length} </h3>
            <h3>Visited Flags: {contriesFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=> <li>{country.name.common}</li>)
                }
            </ol>
           <div className="countries">
             {
                countries.map(country=><Country country={country} handlevisitedCountries={handlevisitedCountries}
                  handleVisitedFlag ={handleVisitedFlag}    ></Country>)
            }
           </div>
           
        </div>
    );
};

export default Countries;