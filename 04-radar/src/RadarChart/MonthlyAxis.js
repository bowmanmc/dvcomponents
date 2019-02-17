import React from 'react';

import Config from './Config';

// Draws the monthly axis lines for the radar chart
const MonthlyAxis = () => {

    const centerX = Config.width / 2;
    const centerY = Config.height / 2;

    const numMonths = 12;

    let lines = [];
    for (let i = 0; i < numMonths; i++) {
        lines.push(
            <line key={i} className="Axis"
                x1={ centerX }
                y1={ centerY }
                x2={ centerX * (1 - 1 * Math.sin(i * Config.radians / numMonths))}
                y2={ centerX * (1 - 1 * Math.cos(i * Config.radians / numMonths))}
            />
        );
    }

    return (
        <g className="MonthlyAxis">
            { lines }
        </g>
    );
};

export default MonthlyAxis;
