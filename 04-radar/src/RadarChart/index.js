import React from 'react';

import BowmanBelt from './BowmanBelt';
import Config from './Config';
import Labels from './Labels';
import MonthlyAxis from './MonthlyAxis';
import PrecipitationBars from './PrecipitationBars';
import TempMarkers from './TempMarkers';
import TemperatureBand from './TemperatureBand';

import './RadarChart.scss';


const RadarChart = (props) => {
    const { data } = props;

    //
    //<PrecipitationBars data={data.monthly} />

    return (
        <svg className="RadarChart" viewBox={`0 0 ${Config.width} ${Config.height}`}>
            <g className="chart"
               transform-origin="center center"
               transform="scale(0.9)">
                <BowmanBelt />
                <MonthlyAxis />
                <TempMarkers />
                <TemperatureBand data={data.monthly} />
            </g>
            <Labels />
        </svg>
    );
};

export default RadarChart;
