import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryMoreDetail from '../CountryMoreDetail/CountryMoreDetail';
import './CountryDetail.css';

const CountryDetail = () => {
    const [country, setCountry] = useState([])
    const {name} = useParams()
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div className="country-detail">
            {
                country.map(data => <CountryMoreDetail data={data}></CountryMoreDetail>)
            }
        </div>
    );
};

export default CountryDetail;