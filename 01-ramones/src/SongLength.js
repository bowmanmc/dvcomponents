import React from 'react';


const SongLength = (props) => {
    const { data, highlight, startY, width } = props;
    let className = 'track';
    if (highlight) {
        className = 'track highlight';
    }

    return (
        <g className={className}>
            <text className="title" y={startY}>{data.Track}. {data.Title}</text>
            <rect className="bar" x={0} y={startY + 16} height={27} width={width} />
            <text className="time" x={width - 7} y={startY + 31}>{data.Length}</text>
        </g>
    );
};

export default SongLength;
