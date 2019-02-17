import React from 'react';

import BowmanBelt from './BowmanBelt';
import Config from './Config';
import Labels from './Labels';
import MonthlyAxis from './MonthlyAxis';
import PrecipitationBars from './PrecipitationBars';
import TemperatureBand from './TemperatureBand';

import './RadarChart.scss';


const RadarChart = (props) => {
    const { data } = props;
    console.log('Rendering Radar Chart for: ' + JSON.stringify(data));

    return (
        <svg className="RadarChart" viewBox={`0 0 ${Config.width} ${Config.height}`}>
            <g className="chart"
               transform-origin="center center"
               transform="scale(1)">
                <BowmanBelt />
                <MonthlyAxis />
                <PrecipitationBars data={data.monthly} />
                <TemperatureBand data={data.monthly} />
            </g>
            <Labels />
        </svg>
    );
};

export default RadarChart;
