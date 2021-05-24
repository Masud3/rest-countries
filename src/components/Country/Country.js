import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, flag } = props.country;
    const history = useHistory()
    const handleDetail = () =>{
        history.push(`/country/${name}`)
    }
    return (
            <div className="box">
                <h3>{name}</h3>
                <img style={{ height: '100px' }} src={flag} alt="" />
                <br />
                <button onClick={()=>handleDetail(name)} className="btn">Country Details</button>
                {/* <Link to={`/country/${name}`}>Details of country</Link> */}
            </div>
    );
};

export default Country;