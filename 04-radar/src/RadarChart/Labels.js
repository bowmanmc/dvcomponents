import React from 'react';

import Config from './Config';


// Labels for the RadarChart
const Labels = () => {

    const centerX = Config.width / 2;

    return (
        <g className="Labels">
            <text x={centerX} y={7}>January</text>
            <text x={centerX} y={Config.height - 4}>July</text>
        </g>
    );
};

export default Labels;
