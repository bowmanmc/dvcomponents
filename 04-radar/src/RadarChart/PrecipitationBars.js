import React from 'react';
import { scaleLinear } from 'd3-scale';

import Config from './Config';
import {calculatePoint} from './utils';


// Precipitation Bars
const PrecipitationBars = (props) => {

    const { data } = props;
    const centerX = Config.width / 2;
    const centerY = Config.height / 2;

    const numMonths = 12;

    // Scale the precipitation to the scale we're using for temp
    // so that we can see it...
    const scale = scaleLinear().domain([0, Config.maxPrecipitation]).range([0, Config.maxValue]);

    let bars = [];
    for (let i = 0; i < numMonths; i++) {
        const month = data[i];
        const scaledValue = scale(month.precip);
        const pt = calculatePoint(Config, scaledValue, i);
        bars.push(
            <line key={i} className="bar"
                x1={centerX} y1={centerY}
                x2={pt[0]} y2={pt[1]} />
        )
    }

    return (
        <g className="PrecipitationBars">
            { bars }
        </g>
    );
};

export default PrecipitationBars;
