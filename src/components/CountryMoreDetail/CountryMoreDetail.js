import React from 'react';

const CountryMoreDetail = (props) => {
    const {name,capital, flag, population, area, numericCode} = props.data;
    return (
        <div>
            <img className="country-img" src={flag} alt="" />
            <h3>Name:{name}</h3>
            <p>numericCode: {numericCode}</p>
            <p>Capital:{capital}</p>
            <p>Population: {population}</p>
            <p><small>Area:{area}</small></p>
        </div>
    );
};

export default CountryMoreDetail;