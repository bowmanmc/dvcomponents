import React from 'react';

import RadarChart from './RadarChart';

import './CityCard.scss';


const CityCard = (props) => {

    const { city } = props;

    return (
        <div className="CityCard">
            <RadarChart data={city} />
            <h2>{city.city}</h2>
        </div>
    );
};

export default CityCard;
