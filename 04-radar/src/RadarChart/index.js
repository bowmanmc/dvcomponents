import React from 'react';

import BowmanBelt from './BowmanBelt';
import Config from './Config';
import MonthlyAxis from './MonthlyAxis';
import TemperatureBand from './TemperatureBand';

import './RadarChart.scss';


const RadarChart = (props) => {
    const { data } = props;
    console.log('Rendering Radar Chart for: ' + JSON.stringify(data));

    return (
        <svg className="RadarChart" viewBox={`0 0 ${Config.width} ${Config.height}`}>
            <BowmanBelt />
            <MonthlyAxis />
            <TemperatureBand data={data.monthly} />
        </svg>
    );
};

export default RadarChart;
