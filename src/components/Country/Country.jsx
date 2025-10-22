import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)

    const handlevisit=()=>{
        console.log("clicked")

    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area>30000 ? "Big Country":"Small Country"}</p>
            <button onClick={handlevisit}>Not visited</button>
        </div>
    );
};

export default Country;