import React from 'react';

import MonthlyAxis from './MonthlyAxis';

import './RadarChart.scss';


const RadarChart = (props) => {

    // Square component
    const width = 100;
    const height = 100;

    const { data } = props;
    console.log('Rendering Radar Chart for: ' + JSON.stringify(data));

    return (
        <svg className="RadarChart" viewBox={`0 0 ${width} ${height}`}>
            <MonthlyAxis />
        </svg>
    );
};

export default RadarChart;
