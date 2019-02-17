import React from 'react';

import Config from './Config';
import {scaleLinear} from "d3-scale";


const TempMarkers = () => {

    const centerX = Config.width / 2;
    const centerY = Config.height / 2;

    const scale = scaleLinear().domain([0, Config.maxValue]).range([0, centerX]);

    let markers = [32, 60, 70, 80, 90];

    let circles = [];
    let labels = [];
    for (let i = 0; i < markers.length; i++) {
        circles.push(
            <circle key={`circ${i}`} className="marker"
                cx={centerX}
                cy={centerY}
                r={scale(markers[i])} />
        );

        labels.push(
            <text key={`txt${i}`} x={centerX + scale(markers[i])} y={centerY}>{markers[i]}°</text>
        );
    }

    return (
        <g className="TempMarkers">
            { circles }
            { labels }
        </g>
    );
};

export default TempMarkers;
