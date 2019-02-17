import React from 'react';

import { calculatePointString } from './utils';
import Config from './Config';


// Temperature Band component --> polygon donut
const TemperatureBand = (props) => {
    const { data } = props;
    if (!data) {
        return null;
    }

    let ptsHigh = [];
    let ptsLow = [];
    for (let i = 0; i < data.length; i++) {
        const month = data[i];
        ptsHigh.push(calculatePointString(Config, month.high, i));
        ptsLow.push(calculatePointString(Config, month.low, i));
    }

    const pointsHigh = ptsHigh.join(' ');
    const pointsLow = ptsLow.join(' ');
    return (
        <g className="TemperatureBand">
            <defs>
                <mask id="TemperatureBand__Mask">
                    <rect width="100%" height="100%" fill="white" />
                    <polygon fill="black" points={pointsLow} />
                </mask>
            </defs>
            <polygon className="band"
                 points={pointsHigh}
                 mask="url(#TemperatureBand__Mask)" />
        </g>
    );
};

export default TemperatureBand;
