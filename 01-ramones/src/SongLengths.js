import React from 'react';

import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

import SongLength from './SongLength';


import './SongLengths.scss';


const SongLengths = (props) => {
    const { data } = props;
    const width = 640;
    let height = 0;
    const trackHeight = 16 + 27 + 12;

    const x = scaleLinear().domain([0, 160]).range([0, width]);

    const extents = extent(data, d => Number(d.Seconds));

    let songs = [];
    data.forEach(datum => {
        const barWidth = x(datum.Seconds);
        let highlight = false;
        if (extents.indexOf(Number(datum.Seconds)) >= 0) {
            highlight = true;
        }
        songs.push(
            <SongLength data={datum}
                        startY={height}
                        width={barWidth}
                        highlight={highlight} />
        );
        height += trackHeight;
    });

    return (
        <svg className="SongLengths" viewBox={`0 0 ${width} ${height}`}>
            {songs}
        </svg>
    );
};

export default SongLengths;
