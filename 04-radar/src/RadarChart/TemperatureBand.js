import React from 'react';

import { calculatePoint } from './utils';
import Config from './Config';


// Temperature Band component --> avg hi and low
const TemperatureBand = (props) => {
    const { data } = props;
    if (!data) {
        return null;
    }

    let ptsHigh = [];
    let ptsLow = [];
    let circlesHigh = [];
    let circlesLow = [];
    for (let i = 0; i < data.length; i++) {
        const month = data[i];
        const highPt = calculatePoint(Config, month.high, i);
        const lowPt = calculatePoint(Config, month.low, i);
        ptsHigh.push(`${highPt[0]},${highPt[1]}`);
        ptsLow.push(`${lowPt[0]},${lowPt[1]}`);

        circlesHigh.push(
            <circle key={`hipt${i}`} className="highPt"
                cx={highPt[0]} cy={highPt[1]} r={0.65}
                filter="url(#glow)" />
        );
        circlesLow.push(
            <circle key={`lopt${i}`} className="lowPt"
                cx={lowPt[0]} cy={lowPt[1]} r={0.65}
                filter="url(#glow)" />
        );
    }

    const pointsHigh = ptsHigh.join(' ');
    const pointsLow = ptsLow.join(' ');
    return (
        <g className="TemperatureBand">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation={1.35} />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <polygon className="high"
                points={pointsHigh}
                filter="url(#glow)" />
            <polygon className="low"
                points={pointsLow}
                filter="url(#glow)" />
            { circlesHigh }
            { circlesLow }
        </g>
    );
};

export default TemperatureBand;
