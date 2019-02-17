import React from 'react';

import Config from './Config';


// Math goes here!
const calculatePoint = (Config, val, i) => {
    const radius = Config.width / 2;

    const ptX = radius * (
        1 - (Math.max(val, 0) / Config.maxValue)
        * 1 * Math.sin(i * Config.radians / 12)
    );
    const ptY = radius * (
        1 - (Math.max(val, 0) / Config.maxValue)
        * 1 * Math.cos(i * Config.radians / 12)
    );
    return `${ptX},${ptY}`;
};

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
        ptsHigh.push(calculatePoint(Config, month.high, i));
        ptsLow.push(calculatePoint(Config, month.low, i));
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
