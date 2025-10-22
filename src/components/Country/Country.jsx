import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)

    const [visited, setvisited]=useState(false)
    const handlevisit=()=>{
       if (visited){
        setvisited(false)
       }else{
        setvisited(true)
       }

    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area>30000 ? "Big Country":"Small Country"}</p>
            <button onClick={handlevisit}>{visited ? "visited":"not visited"}</button>
        </div>
    );
};

export default Country;