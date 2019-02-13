import React from 'react';
import { csvParse } from 'd3-dsv';

import SongLengths from './SongLengths';

import './App.scss';


const DATA_URL = '/data/ramones-st-1976.csv';

class App extends React.Component {

    state = {};

    componentDidMount() {
        fetch(DATA_URL).then(response => {
            return response.text();
        }).then(dataStr => {
            const data = csvParse(dataStr);
            this.setState({ data });
        });
    }

    render() {
        let content = <p>loading...</p>;
        if (this.state.data) {
            content = <SongLengths data={this.state.data} />
        }

        return content;
    }
};

export default App;
