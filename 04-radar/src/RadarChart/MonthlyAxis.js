import React from 'react';

import { calculatePoint } from './utils';
import Config from './Config';


// Draws the monthly axis lines for the radar chart
const MonthlyAxis = () => {

    const centerX = Config.width / 2;
    const centerY = Config.height / 2;

    const numMonths = 12;

    let lines = [];
    for (let i = 0; i < numMonths; i++) {
        const pt = calculatePoint(Config, Config.maxValue, i);
        lines.push(
            <line key={i} className="Axis"
                x1={centerX} y1={centerY}
                x2={pt[0]} y2={pt[1]} />
        );
    }

    return (
        <g className="MonthlyAxis">
            { lines }
        </g>
    );
};

export default MonthlyAxis;
