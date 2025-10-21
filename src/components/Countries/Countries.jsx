import React, { use } from 'react';

const countries = ({countriesPromise}) => {
    const countries =use(countriesPromise);
    console.log(countries)
    return (
        <div>
            <h1>Welcome to country</h1>
        </div>
    );
};

export default countries;