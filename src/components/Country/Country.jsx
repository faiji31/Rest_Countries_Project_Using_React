import React, { useState } from 'react';
import './Country.css';

const Country = ({country , handlevisitedCountries, handleVisitedFlag}) => {
    console.log(country)

    const [visited, setvisited]=useState(false)
    const handlevisit=()=>{
       if (visited){
        setvisited(false)
       }else{
        setvisited(true)
       }
       handlevisitedCountries(country)

    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area>30000 ? "Big Country":"Small Country"}</p>
            <button onClick={handlevisit}>{visited ? "visited":"not visited"}</button>
            <button onClick={()=>{handleVisitedFlag (country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;