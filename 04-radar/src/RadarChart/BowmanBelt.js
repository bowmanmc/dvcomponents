import React from 'react';
import { scaleLinear } from 'd3-scale';

import Config from './Config';


// Ideal Climate Band
const BowmanBelt = () => {

    const halfWidth = Config.width / 2;
    const halfHeight = Config.height / 2;

    const scale = scaleLinear().domain([0, Config.maxValue]).range([0, halfWidth]);

    const idealTemp = 70;
    const deviation = 5;
    const idealMin = scale(idealTemp - deviation);
    const idealMax = scale(idealTemp + deviation);

    return (
        <g className="BowmanBelt">
            <defs>
                <mask id="BowmanBelt__Mask">
                    <rect width="100%" height="100%" fill="white"/>
                    <circle fill="black"
                        cx={halfWidth}
                        cy={halfHeight}
                        r={idealMin}  />
                </mask>
            </defs>
            <circle className="belt"
                mask="url(#BowmanBelt__Mask)"
                cx={halfWidth}
                cy={halfHeight}
                r={idealMax} />
        </g>
    );
};

export default BowmanBelt;
